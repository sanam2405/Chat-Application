const moment = require("moment");

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format("h:mm a"), // current time
  };
} // This displays the name of the user and the time when he sends the message

module.exports = formatMessage;
