
module.exports = function getSeason(dateTmp) {
  if (!dateTmp) return "Unable to determine the time of year!";
  let month = dateTmp.getUTCMonth();
  if (month>10 || month < 2) {
    return "winter";
  } else if (month < 5) {
    return "spring";
  } else if (month < 8) {
    return "summer";
  } else return "autumn";
};
