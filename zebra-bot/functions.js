/**
 * this is a helper file
 * check_zebra function do parse the text to match the pattern: {keyword} {command} {command_argument}
 * where:
 *    keyword = /zebra
 *    command = pay
 *    argument = {amount}
 */


function check_zebra(txt) {
    txt = txt.toLowerCase().trim();

    const keyword = "/zebra"
    const pay_command = "pay"

    //const regexp = new RegExp("\/zebra pay  (\d+(?:\.\d+)?)", "g");

    //var match = regexp.exec(txt);
    //console.log(match); // abc

    var match = txt.match(/\/zebra pay (\d+(?:\.\d+)?)/);
    if (match != null)
        return Number(match[1])

    return null;
}

module.exports = {check_zebra}