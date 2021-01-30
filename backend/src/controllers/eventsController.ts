import { Request, Response} from 'express';
import pool from '../database';

class EventsController{
    index(req:Request, res:Response){

    }
    
    public async create(req: Request, res: Response) {
        console.log(req.body);
        const evento = await pool.query('INSERT INTO datosevento SET ?', [req.body]);
        console.log(evento);
        if (evento.affectedRows == 0) {
            res.send([false]);
        } else {
            res.send([evento.insertId]);
        }
    }
    
    public async edit(req: Request, res: Response) {
        console.log('1111',req.body);
        var d = new Date(req.body.fecha),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        req.body.fecha= [year, month, day].join('-');   
        const evento = await pool.query('UPDATE datosevento SET destino=? , descripcion=? , fecha=? , latitud=? , longitud=? WHERE id_evento= ?', [req.body.destino, req.body.descripcion, req.body.fecha, req.body.latitud, req.body.longitud, req.body.id_evento]);
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
        const count= await pool.query('SELECT COUNT(id_usuario) AS party FROM eventousuario WHERE id_evento=?', [req.params.id]);
        const people= await pool.query('SELECT id, nombre, apellidos, email FROM usuarios WHERE id IN (SELECT id_usuario FROM eventousuario WHERE id_evento = ?)', [req.params.id]);
        evento[0].participantes= count[0].party;
        evento[0].lista_users= people;
        
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

    
    public async apuntarse(req: Request, res: Response) {
        console.log(req.body);
        const evento = await pool.query('INSERT INTO eventousuario SET ?', [req.body]);
        
        if (evento.affectedRows == 0) {
            res.send([false]);
        } else {
            res.send([evento.insertId]);
        }
    }


}

export const controladorEventos = new EventsController();