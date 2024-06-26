const API_URL = import.meta.env.VITE_API_URL;


export const getDiscs = async () => {
  const response = await fetch(`${API_URL}/catalog/discinstances`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  return data;
};