export const kebabCaseToTitleCase = (str: string) => {
  const words = str.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toLocaleUpperCase() + word.slice(1),
  );
  return capitalizedWords.join(" ");
};
