/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { BackBtn } from './styled/Buttons.styled';
import { H2, H3, H4 } from './styled/elements/Headings.styled';
import { P } from './styled/elements/P';
import { HR } from './styled/elements/HR';

import {
  RecipeContainer,
  Ingredients,
  Preparation,
  Garnish,
  Notes
} from './styled/Containers.styled';

const Recipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [singleCocktail, setSingleCocktail] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(singleCocktail);
  console.log(loading);

  useEffect(() => {
    setLoading(true);
    getCocktails(`/cocktails/${id}`)
      .then((data) => setSingleCocktail(data.response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);

  const onBackBtnClick = () => {
    navigate(-1);
  };

  const lineBreaks = (string, what) => {
    if (what === 'ing') {
      const newText = string.split(',').map((str) => <P>{str}</P>);
      return newText;
    } else if (what === 'prep') {
      const newText = string.split('.').map((str) => <P>{str}</P>);
      return newText;
    }
  };

  return (
    <>
      <RecipeContainer>
        <H2 recipe>{singleCocktail.cocktailName}</H2>
      </RecipeContainer>
      <HR />
      <RecipeContainer>
        <Ingredients>
          <H3 upper>Ingredients</H3>
          {singleCocktail.ingredients &&
            lineBreaks(singleCocktail.ingredients, 'ing')}
        </Ingredients>
        <Notes>
          <H4 recipe upper>
            Notes
          </H4>
          {singleCocktail.notes ? (
            <P notes small>{singleCocktail.notes}</P>
          ) : (
            <P small>N/A</P>
          )}
        </Notes>
      </RecipeContainer>
      <HR />
      <RecipeContainer>
        <Preparation>
          <H3 upper>Preparation</H3>
          {singleCocktail.preparation &&
            lineBreaks(singleCocktail.preparation, 'prep')}
        </Preparation>
      </RecipeContainer>
      <HR />
      <RecipeContainer>
        <Garnish>
          <H3 recipe upper>
            Garnish
          </H3>
          {singleCocktail.garnish ? (
            <P small>{singleCocktail.garnish}</P>
          ) : (
            <P small>N/A</P>
          )}
        </Garnish>
        <a href={singleCocktail.imageSearchLink}>
          <P>Images for inspiration</P>
        </a>
      </RecipeContainer>
      <HR />
      <RecipeContainer>
        <BackBtn type="button" onClick={() => onBackBtnClick()}>
          Back
        </BackBtn>
      </RecipeContainer>
    </>
  );
};
export default Recipe;
