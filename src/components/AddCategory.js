import React ,{useState}from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState("")

    const onInputChange=({target})=>{
        setInputValue(target.value);
    }
    const onSubmit =(event)=>{
        event.preventDefault();
        //console.log("submit hecho")

        if(inputValue.trim().length<=1)return;

        onNewCategory(inputValue.trim())
          //setCategories(categories=>[...inputValue, inputValue])
          setInputValue("")
        
        
        
    }
  return (
      
      <form onSubmit={ onSubmit}>
        <input
           type="text"
           placeholder='buscar gifs'
           value={inputValue}
           onChange={onInputChange}
        />
      </form>    
    ) 
}

//AddCategory.propTypes={
//  setCategories:PropTypes.func.isRequired
//}