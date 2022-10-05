import React, { useEffect, useState } from 'react';
import {getGifs} from'../Helpers/getGifs';

export const useFechGifs = (category) => {

     const [images, setImagenes] = useState ([]);
     const [isLoading,setIsLoading]=useState(true);
    const getImages=async()=>{
      const newImages =await getGifs(category);
      setImagenes (newImages); 
      setIsLoading(false);
  }


  useEffect(() => {
       getImages();
  
    
  }, []);
  return {
     images,
     isLoading
  }
}
