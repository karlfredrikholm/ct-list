export const BASE_URL = 'https://final-project-5gwus5mtja-lz.a.run.app';
// const BASE_URL = 'http://localhost:8080';

export const getCocktails = async (slug) => {
  const res = await fetch(`${BASE_URL}/${slug}`);
  const json = await res.json();
  return json;
};