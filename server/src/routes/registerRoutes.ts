import {Router} from 'express';

import {registerController} from '../controllers/registerController';

class RegisterRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/',registerController.def_equipo);
        this.router.put('/:nombre',registerController.cambio_equipo);
        this.router.delete('/:nombre',registerController.eliminar_equipo);
        this.router.get('/',registerController.mostrar_resultados);
    }
}

const registerRoutes = new RegisterRoutes();
export default registerRoutes.router;