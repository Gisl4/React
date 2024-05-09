import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Batman"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // setCategories([...categories, "Valorant"]);
    setCategories([...categories, newCategory]);
    // setCategories((cat) => [...cat, "Valorant"]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
        currentCategories={categories}
      />

      {/* listado de Gif/items */}

      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* <li>ABC</li> */}

      {/* Gif Item */}
    </>
  );
};
