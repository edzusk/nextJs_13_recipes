import Link from "next/link"
import styles from "./Header.module.scss"

const Header = () => {

  return(
    <div className="container">
      <nav className={styles.nav}>
        <Link className={styles.navElement} href="/">Home</Link>
        <Link className={styles.navElement}  href="/recipes/all">Recipes</Link>
        <Link className={styles.navElement}  href="/addRecipe">Add new recipe</Link>
      </nav>
    </div>
  )
}

export default Header
