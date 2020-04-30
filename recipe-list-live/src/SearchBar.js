import React from "react";

export function SearchBar(props) {
  const handleSearchChange = (event) => {
    const query = event.currentTarget.value;

    const filteredRecipes = props.allRecipes.filter(
      (recipe) => recipe.name.indexOf(query) >= 0
    );

    props.setRecipes(filteredRecipes);
  };

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search recipes"
        onChange={handleSearchChange}
      />
    </section>
  );
}
