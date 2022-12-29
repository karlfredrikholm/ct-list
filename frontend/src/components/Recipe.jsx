/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { BackBtn } from './styled/Buttons.styled';
import { H2, H3, H4 } from './styled/elements/Headings.styled';
import { P } from './styled/elements/P';
import { UL, LI } from './styled/elements/List.styled';

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
      const newText = string.split(',').map((str) => <LI><P>{str}</P></LI>);
      return newText;
    } else if (what === 'prep') {
      const newText = string.split('.').map((str) => <P>{str}</P>);
      return newText;
    }
  };

  return (
    <RecipeContainer>
      <H2 recipe>{singleCocktail.cocktailName}</H2>
      <Ingredients>
        <H3>Ingredients</H3>
        <UL>
          {singleCocktail.ingredients
            && lineBreaks(singleCocktail.ingredients, 'ing')}
        </UL>
      </Ingredients>
      <Preparation>
        <H3>Preparation</H3>
          {singleCocktail.preparation
            && lineBreaks(singleCocktail.preparation, 'prep')}
      </Preparation>
      <Garnish>
        <H4>Garnish</H4>
          {singleCocktail.garnish ? <P notes>{singleCocktail.garnish}</P> : <P>N/A</P>}
      </Garnish>
      <Notes>
        <H4>Notes</H4>
          {singleCocktail.notes ? <P notes>{singleCocktail.notes}</P> : <P>N/A</P>}
      </Notes>

      <a href={singleCocktail.imageSearchLink}>Images for inspiration</a>
      <BackBtn type="button" onClick={() => onBackBtnClick()}>
        Back
      </BackBtn>
    </RecipeContainer>
  );
};
export default Recipe;
