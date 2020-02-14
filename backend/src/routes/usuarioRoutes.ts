import { Router } from 'express';
import { controladorUsuario } from '../controllers/usuarioController';

class UsuarioRoutes{
    
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.post('/crear', controladorUsuario.create);
        this.router.get('/', controladorUsuario.read);
        this.router.put('/:id', controladorUsuario.update);
        this.router.delete('/:id', controladorUsuario.delete);
        this.router.get('/:id', controladorUsuario.readone);
        this.router.post('/login', controladorUsuario.readLogin);
    }

}

const rutasUsuario = new UsuarioRoutes();
export default rutasUsuario.router;