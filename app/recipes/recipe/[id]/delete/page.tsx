'use client'
import { Recipe } from '@/types/types';
import axios from 'axios';
import Link from 'next/link';
import styles from './delete.module.scss';

const deleteRecipe =  (id: Recipe['_id']) => {
  axios.delete<Recipe>(`http://localhost:3000/api/recipes/${id}`)
}
type DeleteRecipeProps = {
  params: {id: Recipe['_id']}
} 

const DeleteRecipe = ({params}:DeleteRecipeProps) => {
  const id = params.id;
  return (
    <div className="container">
      <h2>Adre You sure want to delete {id}</h2>
      <div className={styles.buttonWrapper}>
        <button>
          <Link href={`/recipes/recipe/${id}`}>NO..</Link>
        </button>
        <button onClick={() => deleteRecipe(id)}> 
        <Link href={`recipes/all`}>Yes..</Link>
          </button>
      </div>
    </div>
  )
}

export default DeleteRecipe;