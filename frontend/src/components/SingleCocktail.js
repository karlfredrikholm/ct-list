import React from 'react'
// import { GiGlassShot } from '../utils/icons';
import { CocktailContainer, Grid, Garnish, Ingredients, Preparation } from './styled/Containers.styled';

const SingleCocktail = () => (
  <CocktailContainer>
    <h4>The Unforgettables</h4>
    <h2>Negroni</h2>
    <hr />
    <Grid>
      <Ingredients>
        <h4>Ingredients</h4>
        <table>
          <tr>
            <td>3 cl</td>
            <td>Gin</td>
          </tr>
          <tr>
            <td>3 cl</td>
            <td>Campari</td>
          </tr>
          <tr>
            <td>3 cl</td>
            <td>Sweet vermouth</td>
          </tr>
        </table>
      </Ingredients>
      <Garnish>
        <h4>Garnish</h4>
        <p>Orange slice/zest</p>
        <h4>Serve in</h4>
        <p>Rocks glass</p>
      </Garnish>
    </Grid>
    <Preparation>
      <h3>Preparation:</h3>
      <p>1. Stir all ingredients together with ice.</p>
      <p>2. Strain into rocks glass over fresh ice.</p>
      <p>3. Garnish with orange slice and / or zest.</p>
    </Preparation>
    <a href="#"><h3>How it might look</h3></a>
  </CocktailContainer>
)

export default SingleCocktail;