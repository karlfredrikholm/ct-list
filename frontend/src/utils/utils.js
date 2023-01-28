export const BASE_URL = 'https://ct-list-qs2yyiwdaa-lz.a.run.app';

export const getCocktails = async (slug) => {
  const res = await fetch(`${BASE_URL}/${slug}`);
  const json = await res.json();
  return json;
};