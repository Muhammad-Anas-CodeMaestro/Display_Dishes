import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Components/Recipe";
import axios from "axios";
import NavRoutes from "./Components/NavRoutes";

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/recipes"); //fetch Api from axios
    setData(response.data.recipes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavRoutes /> { /* ReuseAble Component */ }
      <div className="container"> 
        <Recipe data={data} /> { /* Props Pass */ }
      </div>
    </>
  );
}

export default App;
