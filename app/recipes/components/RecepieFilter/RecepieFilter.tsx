import Link from "next/link"
import styles from "./RecepieFilter.module.scss"


const RecepieFilter = () => {

  return (
    <div className="container">
      <div className={styles.filter}>
      <Link className={styles.filterElement} href={'/recipes/all'}>All</Link>
      <Link className={styles.filterElement} href={'/recipes/main'}>Main course</Link>
      <Link className={styles.filterElement} href={'/recipes/dessert'}>Desserts</Link>
      <Link className={styles.filterElement} href={'/recipes/coctail'}>Coctails</Link>
      </div>
    </div>
  )
}

export default RecepieFilter