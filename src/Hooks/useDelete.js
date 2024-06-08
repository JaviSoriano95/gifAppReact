import { useState } from "react";

export function useDelete(categories, setCategories){
    const [deleteGifs, setDeleteGifs] = useState([]);
    const [showDeleted, setShowDeleted] = useState(false);
    const onDeleteGif = (id) => {
      setDeleteGifs(preventsGifs =>[...preventsGifs,categories.find(category => category.id === id)]);
      setCategories(categories.filter(category => category.id !== id));
    };
  
    const changerGifs = () => {
      setShowDeleted(prevShowDeleted => !prevShowDeleted);
    };

    return {deleteGifs, setDeleteGifs,showDeleted,onDeleteGif,changerGifs}
}