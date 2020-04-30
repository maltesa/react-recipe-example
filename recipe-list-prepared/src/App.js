import React, { useState } from "react";
import allRecipes from "./data/recipes.json";
import { RecipeList } from "./Recipes";
import SearchBar from "./SearchBar";

const App = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);

  return (
    <div className="app container">
      <header>
        <h1>Recipes</h1>
        <h3>Found {filteredRecipes.length} recipes.</h3>
      </header>
      <section>
        <SearchBar
          allRecipes={allRecipes}
          setFilteredRecipes={setFilteredRecipes}
        />
      </section>
      <section className="flex-container">
        <RecipeList recipes={filteredRecipes} />
      </section>
    </div>
  );
};

export default App;
