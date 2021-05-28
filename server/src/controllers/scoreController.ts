import {Request,Response} from 'express';

class ScoreController{
    public index (req:Request,res:Response){
        res.send('Hello 3');
    }
}

export const scoreController = new ScoreController();