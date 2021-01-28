import { Request, Response} from 'express';
import pool from '../database';

class EventsController{
    index(req:Request, res:Response){

    }
    
    public async create(req: Request, res: Response) {
        const evento = await pool.query('INSERT INTO datosevento SET ?', [req.body]);
        console.log(evento);
        if (evento.affectedRows == 0) {
            res.send([false]);
        } else {
            res.send([evento.insertId]);
        }
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

    public async readEventosFiltrado(req:Request, res:Response){
        const eventos = await pool.query('SELECT * FROM datosevento WHERE destino LIKE "%' + req.params.destino + '%" OR descripcion LIKE "%' + req.params.destino + '%"');
        
        res.json(eventos);
        console.log("EVENTOS: ", eventos);
    }

}

export const controladorEventos = new EventsController();