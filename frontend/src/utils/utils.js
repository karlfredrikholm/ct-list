const BASE_URL = 'https://final-project-5gwus5mtja-lz.a.run.app';
// const BASE_URL = 'http://localhost:8080';

export const API_URL = (slug) => `${BASE_URL}/${slug}`;

// Get all cocktails, all in one category or a single cocktail
export const getCocktails = async (slug) => {
  const res = await fetch(API_URL(slug));
  const json = await res.json();

  return json;
};

// Post
export const postCocktail = async (recipe) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  };

  // const res = await fetch(API_URL('cocktails'), options);
  const res = await fetch(API_URL('cocktails'), options);
  const json = await res.json();
  return json;
};