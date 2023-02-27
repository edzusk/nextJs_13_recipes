import styles from './AddRecipeForm.module.scss';

const AddRecepieForm = () => {


  return (
    <div className="container">
      <form className={styles.form} action="">
        <input placeholder="Title" type="text" name="" id="" />
        <textarea placeholder="Recipe...." name="" id="" cols={30} rows={10}></textarea>
        <select name="" id="">
          <option value="main">Main course</option>
          <option value="desert">Dessert</option>
          <option value="coctail">Coctail</option>
        </select>
        <button>Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecepieForm
