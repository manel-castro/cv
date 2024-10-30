export const getIsPhone = (windowWidth: number) =>
  windowWidth ? windowWidth < 500 : true;
