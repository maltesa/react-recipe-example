import React, { useState } from "react";

const SearchBar = ({ allRecipes, setFilteredRecipes }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => setQuery(e.currentTarget.value);
  const handleSearchSubmitted = (e) => {
    e.preventDefault();
    const [words, tags] = parseQuery(query);

    // filter by name
    let f = allRecipes.filter((r) => {
      const recipeName = r.name.toLowerCase();
      return words.every((word) => recipeName.indexOf(word) >= 0);
    });

    // filter by tags
    f = f.filter((r) =>
      tags.every((searchedTag) =>
        r.tag.some((targetTag) => "#" + targetTag.toLowerCase() === searchedTag)
      )
    );

    setFilteredRecipes(f);
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmitted}>
      <input
        type="text"
        placeholder="Search recipes"
        onChange={handleQueryChange}
      />
    </form>
  );
};

function parseQuery(query) {
  const q = query.toLowerCase();
  const tags = q.match(/#([a-z]+)/gi);
  const words = q
    .replace(/#[a-z]+/gi, "")
    .trim()
    .split(/\s+/);
  return [words || [], tags || []];
}

export default SearchBar;
