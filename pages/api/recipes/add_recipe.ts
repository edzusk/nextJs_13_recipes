import { NextApiRequest, NextApiResponse } from "next";
import MongoConnect from '../../../utils/mongoConnect';
import Recipes from "../../../model/model";
import { NewRecipe } from "../../../types/types";

const addRecipe = async (req: NextApiRequest, res: NextApiResponse) => {

    const recipe: NewRecipe = req.body;
    if (req.method === 'POST') {
      try {
      console.log('connecting to db');
  
      await MongoConnect();
      console.log('connected to db');
      console.log('CREATING DOCUMENT');
      const recipeToAdd = await Recipes.create(recipe);
      console.log('good')
      res.json({ recipeToAdd });
      }catch (error) {
        console.log(error);
        res.json({ error });
      }
    }
};
export default addRecipe
