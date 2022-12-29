/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { BackBtn } from './styled/Buttons.styled';
import { H2, H3 } from './styled/elements/Headings.styled';
import { P } from './styled/elements/P';
import { HR } from './styled/elements/HR';
import { A } from './styled/elements/A';

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
    <RecipeContainer>
      <H2 recipe>{singleCocktail.cocktailName}</H2>

      <HR />

      <Ingredients>
        <H3 upper>Ingredients</H3>
        {singleCocktail.ingredients &&
          lineBreaks(singleCocktail.ingredients, 'ing')}
      </Ingredients>

      <Notes>
        <H3 upper>Notes</H3>
        {singleCocktail.notes ? <P>{singleCocktail.notes}</P> : <P>N/A</P>}
      </Notes>

      <HR />

      <Preparation>
        <H3 upper>Preparation</H3>
        {singleCocktail.preparation &&
          lineBreaks(singleCocktail.preparation, 'prep')}
      </Preparation>

      <Garnish>
        <H3 recipe upper>
          Garnish
        </H3>
        {singleCocktail.garnish ? <P>{singleCocktail.garnish}</P> : <P>N/A</P>}
      </Garnish>

      <HR />

      <A href={singleCocktail.imageSearchLink}>Images for inspiration</A>
      <BackBtn type="button" onClick={() => onBackBtnClick()}>
        Back
      </BackBtn>
    </RecipeContainer>
  );
};
export default Recipe;
