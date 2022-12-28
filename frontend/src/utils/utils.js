export const BASE_URL = 'https://final-project-5gwus5mtja-lz.a.run.app';
// const BASE_URL = 'http://localhost:8080';

// GET cocktails
export const getCocktails = async (slug) => {
  const res = await fetch(`${BASE_URL}/${slug}`);
  const json = await res.json();
  return json;
};

// POST new cockail
export const postCocktail = async (recipe) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  };

  const res = await fetch((`${BASE_URL}/add`), options);
  const json = await res.json();
  return json;
};