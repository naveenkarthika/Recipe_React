import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "858e1585";
  const APP_KEY = "42da56d9445cbc4abc5049416397da46";
  const recipeRequest = "https://api.edamam.com/";
  const DEFA_PARM = `&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const keyword = query;
    const response = await fetch(
      recipeRequest + `search?q=${keyword}` + DEFA_PARM
    );
    const responseJson = await response.json();
    console.log(responseJson.hits);
    setRecipes(responseJson.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => {
          return <Recipe key={index} data={recipe} />
        })}
      </div>
    </div>
  );
};

export default App;
