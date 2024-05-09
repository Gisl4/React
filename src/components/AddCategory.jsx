import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // console.log(inputValue);
    // setCategories((categories) => [inputValue, ...categories]);
    setinputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    // <form onSubmit={(event) => onsubmit(event)}>
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
