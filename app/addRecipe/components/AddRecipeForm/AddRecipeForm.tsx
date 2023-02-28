'use client'

import { NewRecipe } from '@/types/types';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import styles from './AddRecipeForm.module.scss';


const AddRecepieForm = () => {
  const [inputs, setInputs] = useState<NewRecipe>({
    title: '',
    imageUrl: '',
    recipe: '',
    type: 'main',
  })



  return (
    <div className="container">
      <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
        axios.post('/api/recipes/add_recipe', inputs)
        setInputs({
          title: '',
          imageUrl: '',
          recipe: '',
          type:'main',
        })
      }}
      className={styles.form} action="">
        <input  required={true}
        onChange={(e) => setInputs({...inputs, title: e.target.value})}
        value={inputs.title}
        placeholder="Title" type="text" name="" id="" />
        <input required={true}
        onChange={(e) => setInputs({...inputs, imageUrl: e.target.value})}
        value={inputs.imageUrl}
        placeholder="https//...." type="url" name="" id="" />
        <textarea required={true}
        onChange={(e) => setInputs({...inputs, recipe: e.target.value})}
        value={inputs.recipe}
        placeholder="Recipe...." name="" id="" cols={30} rows={10}></textarea>
        <select required={true}
        onChange={(e) => setInputs({...inputs, type: e.target.value as NewRecipe['type']})}
        value={inputs.type}
        name="" id="">
          <option value="main">Main course</option>
          <option value="dessert">Dessert</option>
          <option value="coctail">Coctail</option>
        </select>
        <button>add</button>
      </form>
    </div>
  )
}

export default AddRecepieForm
