/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { SingleCocktailContainer } from './styled/Containers.styled';
import { BackBtn } from './styled/Buttons.styled';
import { H2, H3, H4, H5 } from './styled/elements/Headings.styled';

const Recipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [singleCocktail, setSingleCocktail] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(singleCocktail);
  console.log(loading);

  useEffect(() => {
    setLoading(true)
    getCocktails(`/cocktails/${id}`)
      .then((data) => setSingleCocktail(data.response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, [id]);

  const onBackBtnClick = () => {
    navigate(-1);
  };

  const lineBreaks = (string, what) => {
    if (what === 'ing') {
      const newText = string.split(',').map((str) => <p>{str}</p>);
      return newText;
    } else if (what === 'prep') {
      const newText = string.split('.').map((str) => <p>{str}</p>);
      return newText;
    }
  };

  return (
    <SingleCocktailContainer>
      <H2>
        {singleCocktail.cocktailName}
      </H2>
      <hr />
      <H3>Ingredients</H3>
      {singleCocktail.ingredients && lineBreaks(singleCocktail.ingredients, 'ing')}
      <H4>Garnish</H4>
      {singleCocktail.garnish ? <p>{singleCocktail.garnish}</p> : <p>N/A</p>}
      <H3>Preparation</H3>
      {singleCocktail.preparation && lineBreaks(singleCocktail.preparation, 'prep')}
      <hr />
      {singleCocktail.notes && (
        <>
          <H5>Notes</H5>
          <p>{singleCocktail.notes}</p>
        </>
      )}
      <a href={singleCocktail.imageSearchLink}>Images for inspiration</a>
      <BackBtn type="button" onClick={() => onBackBtnClick()}>
        Back
      </BackBtn>
    </SingleCocktailContainer>
  );
};
export default Recipe;
