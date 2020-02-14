import { Request, Response} from 'express';

class IndexController{
    inicio(req: Request, res: Response){
        res.send("Página de Inicio");
    }
    mapa(req: Request, res: Response){
        res.send("Página de Mapa");
    }
    eventos(req: Request, res: Response){
        res.send("Página de Eventos");
    }
}

export const controladorInicio = new IndexController();