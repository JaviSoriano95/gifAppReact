import { useState } from "react";

export function SearchForm({ onNewCategory }) {

const [inputValue, setInputValue] = useState('');

const onInputChange =({target}) =>{
    setInputValue(target.value)
}

  const handleSubmit = (event) => {
    if(inputValue.trim().length<= 1) return;
      event.preventDefault();
        onNewCategory(inputValue.toLowerCase());
        setInputValue('');
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
      value ={inputValue}
        type="text"
        name="gifs"
        onChange={onInputChange}
        placeholder="Busca el gif que quieras..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
