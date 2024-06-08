
import { useState } from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { Cards } from "./Cards";
import { LoadingMessage } from "./LoadingMessage";
import { useDelete } from "../Hooks/useDelete";

export function Categories({ category }) {
  
  const {categories,setCategories, loading} = useFetchGifs(category);
  const {deleteGifs, setDeleteGifs,showDeleted,onDeleteGif,changerGifs} = useDelete(categories,setCategories)

  const resetGifs = () => {
    setCategories([...deleteGifs,...categories])
    setDeleteGifs([])

  };


  return (
    <>
      <h1>Búsqueda: {category}</h1> 
      <button onClick={changerGifs}>
        {showDeleted ? 'Mostrar gif no borrados' : 'Mostrar gif borrados' }</button>
        <button onClick={resetGifs}>Resetear Borrados</button>
      {loading ? (
        <LoadingMessage/>
      ) : (
       <Cards categories ={showDeleted ? deleteGifs : categories } borrado={showDeleted} 
       onDeleteGif={(value) => onDeleteGif(value)}/>
      )}
    </>
  );
}
