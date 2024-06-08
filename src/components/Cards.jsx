


export function Cards({categories, onDeleteGif, borrado}){



  const eliminar = (id) =>{
        onDeleteGif(id);
      }
    

      console.log(categories)




    return(
    <ol className="categories">
    {categories && categories.length >0 ? (categories.map((category) => (
      <li className="category" key={category.id}>
        <h4 title={category.title}>Title: {category.title}</h4>
        <img
          src={category.images.fixed_height.url}
          alt={category.title}
          title={category.title}
        />
        <br />
        {!borrado ? (<button type="button" onClick={() => eliminar(category.id)}>Eliminar</button>):(
          ''
        )}
      </li>
    ))):(<p>No hay Gifs para mostrar</p>)}
  </ol>)
}