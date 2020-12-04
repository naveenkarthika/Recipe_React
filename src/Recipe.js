import React from "react";
import style from "./recipe.module.css";

function Recipe(props) {
  const newData = props.data.recipe;
  return (
    <div className={style.recipe}>
      <h1>{newData.label}</h1>
      <p>{newData.calories}</p>
      <img className={style.image} src={props.data.recipe.image} alt="" />
      <ol>
        {newData.ingredients.map((ingredient) => {
          return <li key={ingredient.text}>{ingredient.text}</li>;
        })}
      </ol>
    </div>
  );
}

export default Recipe;
