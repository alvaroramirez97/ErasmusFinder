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
    }

}

const rutasEventos = new EventosRoutes();
export default rutasEventos.router;