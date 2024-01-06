export const trimParagraph = (data) => {
  const length = 100;
  const trimmedString =
    data.length > length ? data.substring(0, length - 3) + "..." : data;
  return trimmedString;
};
