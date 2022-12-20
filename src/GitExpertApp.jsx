import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Mundial de Futbol'])

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory) ) return;

       setCategories([...categories, newCategory]);
       //setcategories(cat => [...cat,'Equipo1' ]);
       
    }
  return (
        <>
        {/* titulo*/}
        <h1>GitExpertApp</h1>

        {/*Input */}
        <AddCategory 
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
        />

        {/*Listado Gif */}
        
            {
                categories.map( (category) =>  (
                    <GifGrid key={category} 
                    category={category}
                    />
                    )
                )
            }
        
        </>
  )
}
