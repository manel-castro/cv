export const getIsPhone = (windowWidth: number) =>
  windowWidth ? windowWidth < 500 : true;

export const getIsLessThan780px = (windowWidth: number) =>
  windowWidth ? windowWidth < 780 : true;
