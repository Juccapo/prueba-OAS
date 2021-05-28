import {Router} from 'express';

import {scoreController} from '../controllers/scoreController';

class ScoreRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',scoreController.index);
    }
}

const scoreRoutes = new ScoreRoutes();
export default scoreRoutes.router;