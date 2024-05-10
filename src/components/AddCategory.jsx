import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };

  const onsubmit = (event) => {
    // console.log("Hola mundo desde onSubmit");--- para ver que si se esta llamando en el test
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // console.log(inputValue);
    // setCategories((categories) => [inputValue, ...categories]);
    setinputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    // <form onSubmit={(event) => onsubmit(event)}>
    <form onSubmit={onsubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
