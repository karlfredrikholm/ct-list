import React from 'react';
import data from './data/vegan-recipes';

const App = () => {
  return (
    <div>
      {data.map((recipe) => {
        return (
          <div key={recipe}>
            <h3>{recipe.title}</h3>
            <h4>Ingredients:</h4>
            <p>{recipe.ingredients}</p>
            <h5>Preparation:</h5>
            <p>{recipe.preparation}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
