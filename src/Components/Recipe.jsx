import React from "react";
import { Link } from "react-router-dom";

function Recipe({ data }) {   // Props / data Receive
  return (
    <>
      {data?.map((value, index) => {
        return (
          <div key={index} className="card">
            <img src={value?.image} alt="" />
            <h2>{value?.name}</h2>
            <h4>
              {"$"}
              {value?.cookTimeMinutes}
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              nisi itaque aspernatur, perferendis est vel, quis nam iusto at
              ipsa atque explicabo, dolorem architecto quas.
            </p>
            <Link to={"/receipe/"+value?.id} state={value}><button className="detailButton">For more Detail</button></Link>  { /* Use Link for routing */ }
          </div>
        );
      })}
    </>
  );
}

export default Recipe;
