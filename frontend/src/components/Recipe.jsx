/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCocktails } from 'utils/utils';
import { FilledBtn } from './styled/Buttons.styled';
import { A, HR, P } from './styled/Misc.styled';
import { H2, H3 } from './styled/Headings.styled';
import {
  RecipeWrapper,
  Ingredients,
  Preparation,
  Garnish,
  Notes
} from './styled/Wrappers.styled';

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
    <RecipeWrapper>
      <H2>{singleCocktail.cocktailName}</H2>

      <HR />

      <Ingredients>
        <H3 recipe padd>Ingredients</H3>
        {singleCocktail.ingredients &&
          lineBreaks(singleCocktail.ingredients, 'ing')}
      </Ingredients>

      <Notes>
        <H3 recipe padd>Notes</H3>
        {singleCocktail.notes ? <P>{singleCocktail.notes}</P> : <P>N/A</P>}
      </Notes>

      <HR />

      <Preparation>
        <H3 recipe padd>Preparation</H3>
        {singleCocktail.preparation &&
          lineBreaks(singleCocktail.preparation, 'prep')}
      </Preparation>

      <Garnish>
        <H3 recipe padd>
          Garnish
        </H3>
        {singleCocktail.garnish ? <P>{singleCocktail.garnish}</P> : <P>N/A</P>}
      </Garnish>

      <HR />

      <A href={singleCocktail.imageSearchLink} target="_blank" rel="noopener noreferrer">Images for inspiration</A>
      <FilledBtn type="button" onClick={() => onBackBtnClick()}>
        Back
      </FilledBtn>
    </RecipeWrapper>
  );
};
export default Recipe;
