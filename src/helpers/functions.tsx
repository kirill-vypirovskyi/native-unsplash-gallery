export const capitalize = (string: string): string | null => {
  if (!string) {
    return null;
  }

  return string[0].toLocaleUpperCase() + string.slice(1);
};

export const truncate = (string: string): string | null => {
  if (!string) {
    return null;
  }

  const splited = string
    .split(" ")
    .map((word) => (word.includes("://") ? "[Link]" : word));
  const sliced = splited.slice(0, 4).join(" ");

  return splited.length > 3 ? sliced + "..." : sliced;
};
