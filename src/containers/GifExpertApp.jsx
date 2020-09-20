import React, { useState } from "react";
import AddCategory from "../components/AddCategory";
import GifGrid from "../components/GifGrid";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One'])

  return (
    <>
      <h1>Gif Expert</h1>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      <ol>
        {
          categories.map((category) => (
            <GifGrid 
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
      {/* <button onClick={handleAdd}>Add</button> */}
    </>
  );
};

export default GifExpertApp;
