import axios from "axios"
import Link from "next/link";
import {Recipe} from '../../../types/types'
import Image from 'next/image'
import styles from './RecipesType.module.scss'


type RecepiesByTypeProps = {
  params: {type: Recipe['type']}
}
const getData = async (type: Recipe['type']) => {
  const {data} = await axios.get<Recipe[]>(`http://localhost:3000/api/recipes/get_recipes/${type}`)
  return data;
}


const RecepiesByType = async ({params}:RecepiesByTypeProps) => {

  const type = params.type;
  
  const data = await getData(type);

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {data.map(({ title, _id, imageUrl }) => {
          return (
            <div key={_id} className={`col-4 ${styles.recipeCard}`}>
              <Link href={`/recipes/recipe/${_id}`}>
                <div className={styles.imageWrapper}>
                  <Image className={styles.image} src={imageUrl} alt={"food image"} fill={true} ></Image>
                </div>
                <span>{title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecepiesByType