/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

module.exports = (app, { getRouter }) => {

  const { check_zebra } = require("./utils/functions");
  const { openIssue } = require("./utils/api");

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

      const amount = check_zebra(issueBody);

      if (amount != null) {

        // 1. Write comment
        const issueComment = context.issue({
          body: `An issue #${issueNumber} "${issueTitle}" needs help.\n`+
              `@${author} is ready to pay *${amount}* to solve it!`,
        });

        const result = await context.octokit.issues.createComment(issueComment);
        context.log.info("New comment created");
        context.log.info(result);

        // 2. Send new issue to Server
        const newIssueRequest = {
          issueUrl: context.payload.issue.url,
          repositoryUrl: context.payload.issue.repository_url,
          issueHtmlUrl: context.payload.issue.html_url,
          number: context.payload.issue.number,
          userLogin: context.payload.issue.user.login,
          userId: context.payload.issue.user.id,
          userAvatarUrl: context.payload.issue.user.avatar_url,
          userHtmlUrl: context.payload.issue.user.html_url,
          issueState: context.payload.issue.state,
          issueAssignee: context.payload.issue.assignee,
          issueBody: context.payload.issue.body,
          issueTitle: context.payload.issue.title,
          zebraAmount: amount,
          zebraCommentId: result.data.id,
          zebraCommentUrl: result.data.url,
          zebraCommentHtmlUrl: result.data.html_url
        }

        context.log.info(newIssueRequest);

        const x = await openIssue(newIssueRequest);
        context.log.info(x);
        /*    .then(
                (result) => {
                  context.log.info(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  context.log.info(error)
                }
            );

         */

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
