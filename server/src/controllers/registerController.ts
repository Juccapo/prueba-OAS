import {Request,Response} from 'express';

import pool from '../database';

class RegisterController{

    public async def_equipo(req:Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO resul_torneo set ?',[req.body]);
        res.json({message:'Equipo creado'});
    }

    public async cambio_equipo(req:Request,res:Response): Promise<void>{
        const {nombre} = req.params;
        await pool.query('UPDATE resul_torneo set ? WHERE nombre = ?',[req.body,nombre]);
        res.json({message:'Resultados cambiados'});
    }

    public async eliminar_equipo(req:Request,res:Response): Promise<void>{
        const {nombre} = req.params;
        await pool.query('DELETE FROM resul_torneo where nombre = ?',[nombre]);
        res.json({message:'Equipo eliminado'}); 
    }

    public async mostrar_resultados (req:Request,res:Response): Promise<void>{
        const resultados_equipos = await pool.query('SELECT * FROM resul_torneo');
        res.json(resultados_equipos);
    }
}

export const registerController = new RegisterController();