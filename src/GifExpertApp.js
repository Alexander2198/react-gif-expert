import React,{useState} from 'react';
import {AddCategory,GifGrid} from './components';


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(["one punch"])
   //const handleAdd=()=>{
   //  setcategories([...categories,"thundercat"])

    //} 
  const onAddCategory=(newCategory)=>{
      //console.log(newCategory);
      //categories.push(newCategory);
      if(categories.includes(newCategory))return;
        setCategories([newCategory,...categories]);
  }

  return(
     <>
     
          <h2>GifExperApp</h2>
         <AddCategory 
             //setCategories={setCategories}
             onNewCategory={value => onAddCategory(value)}
         />
          <hr/>
                
        
           {
              categories.map(category=>(
                  <GifGrid
                        key={category}
                        category={category}
                  />
                ) )
           }
      
     </>
    )
  
}
