import React from "react";

export function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map(function (recipeData, i) {
        return React.createElement(Recipe, { key: i, ...recipeData });
        // return <Recipe key={i} {...recipeData} />;
      })}
    </div>
  );
}

export function Recipe({ name, description, image }) {
  return (
    <React.Fragment>
      <div className="card">
        <figure>
          <img src={image} />
        </figure>
        <main>
          <h2>{name}</h2>
          <p>{description}</p>
        </main>
        <footer>tags</footer>
      </div>
      <br />
    </React.Fragment>
  );
}
