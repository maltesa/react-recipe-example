import React from "react";

export const IngredientList = ({ ingredients }) => (
  <>
    <h3>Ingredients</h3>
    <ul>
      {ingredients.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  </>
);

export const Ingredient = ({ amount, unit, name }) => (
  <li>
    {amount} {unit} {name}
  </li>
);
