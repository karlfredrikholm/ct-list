/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { SingleCocktailContainer } from './styled/Containers.styled';
import { BackBtn } from './styled/Buttons.styled';

const SingleCocktail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleCocktail, setSingleCocktail] = useState('');
  // const [loading, setLoading] = useState(false);
  console.log(singleCocktail);

  useEffect(() => {
    //    setLoading(true)
    getCocktails(`/cocktails/${id}`)
      .then((data) => setSingleCocktail(data.response))
      .catch((e) => console.error(e));
    //      .finally(() => setLoading(false))
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
      <h2>{singleCocktail.cocktailName}</h2>
      <hr />
      <h4>Ingredients</h4>
      {singleCocktail && lineBreaks(singleCocktail.ingredients, 'ing')}
      <h4>Garnish</h4>
      {singleCocktail.garnish ? <p>{singleCocktail.garnish}</p> : <p>N/A</p>}
      {singleCocktail.notes && (
        <>
          <h4>Notes</h4>
          <p>{singleCocktail.notes}</p>
        </>
      )}
      <h4>Preparation</h4>
      {singleCocktail && lineBreaks(singleCocktail.preparation, 'prep')}
      <hr />
      <a href={singleCocktail.imageSearchLink}>Images for inspiration</a>
      <BackBtn type="button" onClick={() => onBackBtnClick()}>
        Back
      </BackBtn>
    </SingleCocktailContainer>
  );
};
export default SingleCocktail;
