import { Router } from 'express';
import { controladorEventos } from '../controllers/eventsController';

class EventosRoutes{
    
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/all', controladorEventos.readEventos);
        this.router.get('/:id', controladorEventos.readOne);
        this.router.get('/delete/:id', controladorEventos.delete);
        this.router.get('/buscar/:destino', controladorEventos.readEventosFiltrado);
        this.router.post('/crear', controladorEventos.create);
        this.router.put('/editar', controladorEventos.edit);
        this.router.post('/apuntarse', controladorEventos.apuntarse);
    }

}

const rutasEventos = new EventosRoutes();
export default rutasEventos.router;