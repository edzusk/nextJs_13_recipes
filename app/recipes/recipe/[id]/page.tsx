import styles from './RecipesType.module.scss'


import axios from "axios"
import {Recipe} from '../../../../types/types'
import Image from 'next/image'
import Link from 'next/link'




type RecipepageProps = {
  params: {id: Recipe['_id']}
}
const getData = async (id: Recipe['_id']) => {
  const {data} = await axios.get<Recipe>(`http://localhost:3000/api/recipes/${id}`)
  return data;
}



const Recipepage = async ({params}:RecipepageProps) => {

  const id = params.id;
  
  const {title, imageUrl, recipe, _id} = await getData(id);

  return (
    <div className="container">
      <div className={styles.post}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={imageUrl}
            alt={title}
            fill={true}
          ></Image>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.recipe}>{recipe}</p>
          <Link className={styles.linkButon} href={`/recipes/recipe/${_id}/delete`}> DELETE </Link>
        </div>
      </div>
    </div>
  );
 
}

export default Recipepage