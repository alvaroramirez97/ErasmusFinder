import { Request, Response } from 'express';
import pool from '../database';

const secret_key = 'secretkey';
const jwt = require('jsonwebtoken');
const salt = '$2b$10$tDku1TnjNl/3QjoKKXKcxO'
var bcrypt = require('bcrypt');

class UsuarioController {
    index(req: Request, res: Response) {

    }

    public async create(req: Request, res: Response) {
        req.body.password = bcrypt.hashSync(req.body.password, salt);  
        const usuario = await pool.query('INSERT INTO usuarios SET ?', [req.body]);
        console.log(usuario);
        if (usuario.affectedRows == 0) {
            res.send([false]);
        } else {
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: req.body.email },
                secret_key,
                { expiresIn: expiresIn });
            console.log(accessToken);
            // const fecha: Date = new Date();
            console.log(await pool.query('UPDATE usuarios SET accessToken = ? WHERE email=? AND password=?', [accessToken, req.body.email, req.body.password]));
            
            res.send([usuario.insertId, accessToken]);

        }
    }

    
    public async updateToken(req: Request, res: Response) {
        console.log(req.body);
        const token = await pool.query('UPDATE usuarios SET accessToken = ? WHERE email=?', [req.body.accessToken, req.body.email]);
        console.log('tokeen:', token);
        if (token.affectedRows == 0) {
            res.send(false);
        } else {
            res.send(true);
        }
    }
    
    public async updateUbi(req: Request, res: Response) {
        console.log(req.body);
        const latitud = await pool.query('UPDATE usuarios SET last_longitud = ?, last_latitud = ? WHERE id=?', [req.body.last_longitud, req.body.last_latitud, req.body.email]);
        console.log('latitud:', latitud);
        if (latitud.affectedRows == 0) {
            res.send(false);
        } else {
            res.send(true);
        }
    }


    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }

    public async readone(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }

    public async update(req: Request, res: Response) {
        console.log('0000', req.body);
        const user = await pool.query('UPDATE usuarios SET nombre=?, apellidos=?, email=?, idioma=? WHERE id=?', [req.body.nombre, req.body.apellidos, req.body.email, req.body.idioma, req.body.id]);
        console.log(user);
        if(user.affectedRows == 0)
        {
            res.send([false]);
        }
        else{
            res.send([user.insertId]);
        }
    }

    public async delete(req: Request, res: Response) {
        await pool.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
        res.json("Usuario Borrado");
    }

    public async check(req: Request, res: Response) {
        const user = await pool.query('SELECT id, email FROM usuarios WHERE email=?', [req.params.email]);
        if (!user[0]) {
            console.log('USUARIO NO EXISTE')
            res.send([false]);
        } else {
            console.log('USUARIO SI EXISTE');
            res.send([true, user[0].id]);
        }
        console.log(user[0]);
    }

    
    public async readLogin(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE email=?', [req.body.email]);
        const comparacion = bcrypt.compareSync(req.body.password, usuarios[0].password);
        console.log
        if (comparacion){
            //res.json(usuarios);
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: req.body.email },
                secret_key,
                { expiresIn: expiresIn });
            console.log(accessToken);

            // const fecha: Date = new Date();
            await pool.query('UPDATE usuarios SET accessToken = ? WHERE email=? AND password=?', [accessToken, req.body.email, usuarios[0].password]);

            res.send([accessToken, usuarios[0]]);
        }else {
            res.send([false]);
        }
    }

}

export const controladorUsuario = new UsuarioController();




/*
COMPROBAR EL TOKEN IGUAL EN BBDD Y EN USUARIO OBTENIDO
*/