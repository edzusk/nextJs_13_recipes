import { NextApiRequest, NextApiResponse } from "next"
import connection from '../../../utils/mongoConnect'
import RecipeModel from "../../../model/model"


type NewRecipe = {
  title: string,
  recipe: string
  imageUrl: string
}


const addRecipe = async (req: NextApiRequest, res: NextApiResponse) => {

    const recipe: NewRecipe = req.body;
    if (req.method === 'POST') {
      try {
      console.log('connecting to db');
  
      await connection();
      console.log('connected to db');
      console.log('CREATING DOCUMENT');
      const recipeToAdd = await RecipeModel.create(recipe);
      console.log('good')
      res.json({ recipeToAdd });
      }catch (error) {
        console.log(error);
        res.json({ error });
      }
    }
    

};
export default addRecipe
