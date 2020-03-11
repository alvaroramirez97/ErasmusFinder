import { Request, Response } from 'express';
import pool from '../database';

const secret_key = 'secretkey';
const jwt = require('jsonwebtoken');

class UsuarioController {
    index(req: Request, res: Response) {

    }

    public async create(req: Request, res: Response) {
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

    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }

    public async readone(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }

    public async update(req: Request, res: Response) {
        await pool.query('UPDATE usuarios SET ? WHERE id=?', [req.body, req.params.id]);
        res.json("Usuario Actualizado");
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
        console.log(req.body);
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE email=? AND password=?', [req.body.email, req.body.password]);
        console.log(usuarios);

        if (usuarios.length == 0) {
            res.send([false]);
        }
        else {
            //res.json(usuarios);
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: req.body.email },
                secret_key,
                { expiresIn: expiresIn });
            console.log(accessToken);

            // const fecha: Date = new Date();
            await pool.query('UPDATE usuarios SET accessToken = ? WHERE email=? AND password=?', [accessToken, req.body.email, req.body.password]);

            res.send([accessToken, usuarios[0]]);
        }
    }


}

export const controladorUsuario = new UsuarioController();




/*
COMPROBAR EL TOKEN IGUAL EN BBDD Y EN USUARIO OBTENIDO
*/