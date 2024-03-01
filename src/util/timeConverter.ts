export const timeConverter = (UNIX_timestamp: number) => {
  var a = new Date(UNIX_timestamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = `${month} ${date} at ${hour < 10 ? "0" + hour : hour}:${
    min < 10 ? "0" + min : min
  }`;
  return time;
};
