import { NextApiRequest, NextApiResponse } from "next";
import MongoConnect from '../../../../utils/mongoConnect';
import Recipes from "../../../../model/model";


export default async function getRecipes (req: NextApiRequest, res: NextApiResponse) {
    const {type} = req.query
    console.log(type)
    const recipeTypes = ['main', 'dessert', 'coctail']
    if(type === 'all'){
        try {
            await MongoConnect();
            const data = await Recipes.find({});
            res.status(200).json(data)
        } catch (err) {
            res.send(err);
        }
    }
    if(recipeTypes.includes(type as string)){

        try {
            await MongoConnect();
            const data = await Recipes.find({type: type});
            res.status(200).json(data)
        } catch (err) {
            res.send(err);
        }
    }

    
    
}
