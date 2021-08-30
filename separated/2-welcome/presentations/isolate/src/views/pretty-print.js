export const prettyPrint = (text) => {
  console.log(
    `%c\n${text}\n`,
    'font-style: italic; color: purple; font-weight: bold;',
  );
};
