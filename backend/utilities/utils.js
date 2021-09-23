const moment = require("moment");

const getFormattedDate = (dateFromRequest) => {
  return moment(dateFromRequest).format("LL");
};

module.exports = {
  getFormattedDate,
};
