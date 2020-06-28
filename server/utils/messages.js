const moment = require("moment");

function formatMessage(username, text, lang = "en") {
  return {
    username,
    text,
    time: moment().format("h:mm a"),
    lang,
  };
}

module.exports = formatMessage;
