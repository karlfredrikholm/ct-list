/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getCocktails } from 'utils/utils';
import list from 'reducers/list';
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
  const dispatch = useDispatch();
  // const [singleCocktail, setSingleCocktail] = useState([]);
  // const [loading, setLoading] = useState(false);
  const clickedCocktail = useSelector((store) => store.list.clickedCocktail);

  // To not render "anything" before everything is in place:
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(list.actions.setClickedCocktail(id))
  }, [dispatch, id]);

  // useEffect(() => {
  //   setLoading(true);
  //   getCocktails(`/cocktails/${id}`)
  //     .then((data) => setSingleCocktail(data.response))
  //     .catch((e) => console.error(e))
  //     .finally(() => {
  //       setTimeout(setLoading(false), 800)
  //       setIsLoaded(true)
  //     });
  // }, [id]);

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
      <H2>{clickedCocktail.cocktailName}</H2>

      <HR />

      <Ingredients>
        <H3>Ingredients</H3>
        {clickedCocktail.ingredients &&
          lineBreaks(clickedCocktail.ingredients, 'ing')}
      </Ingredients>

      <Notes>
        <H3>Notes</H3>
        {clickedCocktail.notes ? <P>{clickedCocktail.notes}</P> : <P>N/A</P>}
      </Notes>

      <HR />

      <Preparation>
        <H3 recipe padd>Preparation</H3>
        {clickedCocktail.preparation &&
          lineBreaks(clickedCocktail.preparation, 'prep')}
      </Preparation>

      <Garnish>
        <H3 recipe padd>
          Garnish
        </H3>
        {clickedCocktail.garnish ? <P>{clickedCocktail.garnish}</P> : <P>N/A</P>}
      </Garnish>

      <HR />

      <A href={clickedCocktail.imageSearchLink} target="_blank" rel="noopener noreferrer">Images for inspiration</A>
      <FilledBtn type="button" onClick={() => onBackBtnClick()}>
        Back
      </FilledBtn>
    </RecipeWrapper>
  );
};
export default Recipe;
