import {Router} from 'express';

import {principalController} from '../controllers/principalController';

class PrincipalRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',principalController.index);
    }
}

const principalRoutes = new PrincipalRoutes();
export default principalRoutes.router;