import {Request,Response} from 'express';

class PrincipalController{
    public index (req:Request,res:Response){
        res.send('Hello 1');
    }
}

export const principalController = new PrincipalController();
