/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app, { getRouter }) => {

  const { check_zebra } = require("./functions");

  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {

    context.log.info("New issues.opened event is received");
    context.log.info(context.payload);

    const issueTitle = context.payload.issue.title;
    const issueNumber = context.payload.issue.number;
    const author = context.payload.issue.user.login;
    const issueBody = context.payload.issue.body;

    if (issueBody != null) {

      const zebraAmount = check_zebra(issueBody);

      if (zebraAmount != null) {
        const issueComment = context.issue({
          body: `An issue #${issueNumber} "${issueTitle}" needs help.\n`+
              `@${author} is ready to pay *${zebraAmount}* to solve it!`,
        });

        const result = context.octokit.issues.createComment(issueComment);
        context.log.info("New comment created");
        context.log.info(result);

        return result;
      }
    }

    context.log.info("No /zebra found. Skipping Issue.");
  });

  const router = getRouter("/");
  router.get("/hello-world", (req, res) => {
    req.log.info("Someone is saying hello");
    res.send("Hello World");
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
