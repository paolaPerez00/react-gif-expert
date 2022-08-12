import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch']);

  const onAddCategory = ( newCategory ) =>{

    if ( categories.includes(newCategory) ) return;

    setCategories( [...categories, newCategory]);
    //setCategories( cat = [...cat, 'Valorant'] );
  }

  return (
    <>      
      <h1>GifExpertApp</h1>
  
    {/*Los atributos o propiedades que empiecen por on se reconocen como eventos */}
      <AddCategory 
          onNewCategory = { (value) => onAddCategory(value) }
      /> 
   
        { categories.map( category => (
              <GifGrid 
                  key={ category } 
                  category={ category } />
           ))
        }

    </>
  )
}

