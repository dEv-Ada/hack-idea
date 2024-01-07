export const trimParagraph = (data) => {
  const length = 100;
  const trimmedString =
    data.length > length ? data.substring(0, length - 3) + "..." : data;
  return trimmedString;
};

export const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

export const formatDate = (date) => {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
};
