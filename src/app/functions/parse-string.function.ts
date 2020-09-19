export const parseString = (s) => {
  return s.toLocaleLowerCase().replace(/[^0-9a-zA-Z]/g, '');
};
