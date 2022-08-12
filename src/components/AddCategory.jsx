import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    //Target esel evento que se ejecuta en el input en este caso es el value
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();    
        if( inputValue.trim().length <=1 ) return; //si en el input hay más de un  caracter
        
        // setCategories( (categories) => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    } 

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder = "Buscar gifs"
            value={ inputValue }
            onChange = {  onInputChange }
        />
    </form>
  )
}


