import { Request, Response} from 'express';
import pool from '../database';

class MapaController{
    index(req:Request, res:Response){

    }

    public async verPaises(req:Request, res:Response){
        const paises = await pool.query('SELECT * FROM ubicaciones GROUP BY ubicaciones.id_pais', [req.body]);
        res.json(paises);
    }

    public async cargarIdiomas(req:Request, res:Response){
        const idiomas = await pool.query('SELECT * FROM datosidiomas GROUP BY datosidiomas.id_idioma', [req.body]);
        res.json(idiomas);
    }
    
    // public async readone(req:Request, res:Response){
    //     const usuarios= await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
    //     res.json(usuarios);
    // }

}

export const controladorMapa = new MapaController();