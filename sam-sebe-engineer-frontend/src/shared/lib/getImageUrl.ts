export const getImageUrl = (filename: string | undefined) => {
  const baseUrl = import.meta.env.VITE_BASE_URL || '';
  return `${baseUrl}/images/${filename}`;
};