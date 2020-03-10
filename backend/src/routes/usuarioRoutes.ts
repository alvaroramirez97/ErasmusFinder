import { Router } from 'express';
import { controladorUsuario } from '../controllers/usuarioController';

class UsuarioRoutes{
    
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', controladorUsuario.read);
        this.router.get('/:id', controladorUsuario.readone);
        this.router.post('/crear', controladorUsuario.create);
        this.router.put('/:id', controladorUsuario.update);
        this.router.delete('/:id', controladorUsuario.delete);
        this.router.post('/login', controladorUsuario.readLogin);
        this.router.get('/exist/:email', controladorUsuario.check);
    }

}

const rutasUsuario = new UsuarioRoutes();
export default rutasUsuario.router;