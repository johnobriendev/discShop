const API_URL = import.meta.env.VITE_API_URL;

//fetch all disc instances from the API 
export const getDiscs = async () => {
  const response = await fetch(`${API_URL}/catalog/discinstances`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  return data;
};


export default getDiscs;