import React from 'react';
import { Categories, SearchForm } from "./components";
import { useCategories } from "./Hooks/useCategory";

export const GifExpertApp = () => {
  const { search, addCategory } = useCategories();

  const onAddCategory = (newCategory) => {
    addCategory(newCategory); // Llamamos a la función addCategory con el nuevo valor
  };

  return (
    <>
      <header>
        <h1>GiftExpertApp</h1>
      </header>
      <section>
        <SearchForm onNewCategory={(value) => onAddCategory(value)} />
      </section>
      <main>
        {search.map((category) => (
          <Categories key={category} category={category} />
        ))}
      </main>
    </>
  );
};