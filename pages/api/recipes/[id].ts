import { NextApiRequest, NextApiResponse } from "next";
import MongoConnect from '../../../utils/mongoConnect';
import Recipes from "../../../model/model";
import { Recipe } from "../../../types/types";


export default async function getRecipebyID (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const {id} = req.query
            try {
                await MongoConnect();
                const data = await Recipes.find<Recipe>({_id: id});
                res.status(200).json(data[0])
            } catch (err) {
                res.send(err);
            }
    }
    if (req.method === 'DELETE') {
        const {id} = req.query
        try {
            await MongoConnect();
            const data = await Recipes.findByIdAndRemove({_id: id});
            res.status(200).json(data)

        } catch (err) {
            res.send(err);
        }
    }
}