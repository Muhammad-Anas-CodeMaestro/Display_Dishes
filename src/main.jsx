import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Style/recipe.css"
import "./Style/detaillRecipe.css"
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ForDetails from "./Components/ForDetails"

const router = createBrowserRouter([
  {
    path: "/",          //Routing
    element: <App/>
  },
  {
    path: "/about",     //Routing
    element: <About/>
  },
  {
    path: "/contact",   //Routing
    element: <Contact/>
  },
  {
    path: "/receipe/:id",   //Dynamic Routing
    element: <ForDetails />
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  { /* Router Provider */ }
  </React.StrictMode>
);