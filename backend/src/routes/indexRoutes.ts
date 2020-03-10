import { Router } from 'express';
import { controladorInicio } from '../controllers/indexController';
import { controladorMapa } from '../controllers/mapaController';

class IndexRoutes{
    
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', controladorInicio.inicio);
        
        this.router.get('/verpaises', controladorMapa.verPaises);
        this.router.get('/veridiomas', controladorMapa.cargarIdiomas);

    }

}

const rutasInicio = new IndexRoutes();
export default rutasInicio.router;