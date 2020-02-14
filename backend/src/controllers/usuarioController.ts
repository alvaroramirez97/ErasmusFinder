import { Request, Response} from 'express';
import pool from '../database';

const secret_key = 'secretkey';
const jwt = require('jsonwebtoken');

class UsuarioController{
    index(req:Request, res:Response){

    }

    public async create(req:Request, res:Response){
        await pool.query('INSERT INTO usuarios SET ?', [req.body]);
        console.log(req.body);
        res.json("Usuario creado");
    }

    public async read(req:Request, res:Response){
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }
    
    public async readone(req:Request, res:Response){
        const usuarios= await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE usuarios SET ? WHERE id=?', [req.params.id]);
        res.json("Usuario Actualizado");
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
        res.json("Usuario Borrado");
    }

    public async readLogin(req:Request, res:Response){
        console.log(req.body);
        const usuarios= await pool.query('SELECT * FROM usuarios WHERE email=? AND password=?', [req.body.email, req.body.password]);
        
        console.log(usuarios);
        
        if(usuarios.length == 0) {
            res.json({'message': 'Error al loguearse'})
        }
        else{
            res.json(usuarios);
            const expiresIn = 24*60*60;
            const accessToken = jwt.sign({id: req.body.email},
                                        secret_key,
                                        {expiresIn: expiresIn});
            console.log(accessToken);
            res.json(accessToken);
        }
    }
}

export const controladorUsuario = new UsuarioController();