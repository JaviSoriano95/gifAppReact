import { useState } from "react";

export function useCategories() {
  const [search, setSearch] = useState([]);

  
  function addCategory(newCategory) {
    if (search.includes(newCategory)) {
      // Remover la categoría existente
      const updatedSearch = search.filter(category => category !== newCategory);
      // Añadir la categoría al principio
      setSearch([newCategory, ...updatedSearch]);
    } else {
      setSearch([newCategory, ...search]);
    }
  }
  return { search, addCategory };
}