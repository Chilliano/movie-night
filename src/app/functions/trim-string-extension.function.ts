export const TrimStringExtensionFunction = (s) => {
  const trimmed = s.slice(0, -4).replace(/-/g, ' ');
  return trimmed;
};
