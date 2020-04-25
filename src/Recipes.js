import React from "react";
import { IngredientList } from "./Ingredients";
import { TagList } from "./Tags";

export const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) return <h1>No recipes ☹</h1>;

  return recipes.map((recipe, i) => (
    <div key={i} className="flex-item">
      <Recipe {...recipe} />
    </div>
  ));
};

export const Recipe = ({ name, image, description, ingredient, tag }) => (
  <article className="card">
    {image && (
      <figure>
        <img src={image} alt={name} />
      </figure>
    )}
    <main>
      <h2>{name}</h2>
      <p>{description}</p>
      <IngredientList ingredients={ingredient} />
    </main>
    <footer>
      <TagList tags={tag} />
    </footer>
  </article>
);
