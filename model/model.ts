import { Schema, model, models } from "mongoose";


const recipeSchema = new Schema({
  title: { type: String, required: true },
  recipe: { type: String, required: true },
  imageUrl: { type: String, required: true},
  type: { type: String, required: true },
});

const Recipes = models.Recipe || model('Recipe', recipeSchema);

export default Recipes;
