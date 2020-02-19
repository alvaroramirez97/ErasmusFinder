import { Request, Response} from 'express';
import pool from '../database';

class EventsController{
    index(req:Request, res:Response){

    }

    public async readEventos(req:Request, res:Response){
        const eventos = await pool.query('SELECT * FROM datosevento', [req.body]);
        res.json(eventos);
    }
    
    public async readOne(req:Request, res:Response){
        const evento= await pool.query('SELECT * FROM datosevento WHERE id_evento=?', [req.params.id]);
        res.json(evento);
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM datosevento WHERE id_evento=?', [req.params.id]);
        res.json("Evento Borrado");
    }

}

export const controladorEventos = new EventsController();