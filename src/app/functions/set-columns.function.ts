export const setColumns = (screen): number => {
  const type =
    screen.innerWidth >= 1200
      ? 'lg-desktop'
      : screen.innerWidth <= 576
      ? 'mobile'
      : screen.innerWidth <= 768
      ? 'tab'
      : 'desktop';
  let columnCount = 2;
  switch (type) {
    case 'mobile':
      columnCount = 2;
      break;
    case 'tab':
      columnCount = 3;
      break;
    case 'desktop':
      columnCount = 4;
      break;
    case 'lg-desktop':
      columnCount = 5;
      break;
    default:
      break;
  }
  return columnCount;
};
