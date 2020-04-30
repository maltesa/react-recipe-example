import React, { useState } from "react";
import { RecipeList } from "./Recipe";
import data from "./recipes.json";
import { SearchBar } from "./SearchBar";

function App() {
  const [recipes, setRecipes] = useState(data);

  return (
    <div className="App container">
      <header>
        <h1>Recipes</h1>
      </header>
      <SearchBar allRecipes={data} setRecipes={setRecipes} />
      <section className="flex-container">
        <RecipeList recipes={recipes} />
      </section>
    </div>
  );
}

export default App;
