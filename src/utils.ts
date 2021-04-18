export const isEmptyString = (value?: string): boolean => {
  if (!value) return true;
  if (value === "") return true;
  return false;
};

export const getUserAgent = (): string => {
  return "webapp";
};
