import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavRoutes from "./NavRoutes";
import { faBackward } from "@fortawesome/free-solid-svg-icons/faBackward";

function ForDetails() {
  const params = useParams();
  const location = useLocation();
  const recipeDetails = location.state;

  return (
    <>
      <NavRoutes />   { /* Reuseable Component */ }
      <div className="Container">
        <div className="leftContainer">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faBackward} className="size-12" />
          </Link>
        </div>
        <div className="rightContainer">    {/* This div show data when you click one Receipe From Home Page*/}
          {recipeDetails ? (
            <div className="shortCard">
              <div className="headingAndImage">
                <h2>Recipe Details</h2>
                <img src={recipeDetails.image} alt={recipeDetails.name} />
              </div>
              <div className="details">
                <h3><span> Recipe Name: </span>{recipeDetails.name}</h3>
                <p><span> Ingredients: </span> {recipeDetails.ingredients} </p>
                <p><span> Instructions: </span> {recipeDetails.instructions}</p>
                <p><span> Meal Type: </span> {recipeDetails.mealType} </p>
                <p><span> Cook Time: </span>{recipeDetails.cookTimeMinutes} minutes</p>
                <p><span> Calories Per Serving: </span> {recipeDetails.caloriesPerServing} calories</p>
                <p><span> Difficulty: </span> {recipeDetails.difficulty}</p>
              </div>      
            </div>
          ) : (
            <>
              <p>Loading...</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ForDetails;
