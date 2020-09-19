export const setColumns = (screen): number => {
  const type =
    screen.innerWidth >= 1200
      ? 'lg-desktop'
      : screen.innerWidth <= 576
      ? 'mobile'
      : screen.innerWidth <= 768
      ? 'tab'
      : 'desktop';
  let columnCount = 1;
  switch (type) {
    case 'mobile':
      columnCount = 1;
      break;
    case 'tab':
      columnCount = 2;
      break;
    case 'desktop':
      columnCount = 3;
      break;
    case 'lg-desktop':
      columnCount = 4;
      break;
    default:
      break;
  }
  return columnCount;
};
