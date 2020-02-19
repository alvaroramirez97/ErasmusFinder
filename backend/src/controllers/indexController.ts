import { Request, Response} from 'express';

class IndexController{
    inicio(req: Request, res: Response){
        res.send("Página de Inicio");
    }
    mapa(req: Request, res: Response){
        res.send("Página de Mapa");
    }
    eventos(req: Request, res: Response){
        res.send("Estas en eventos: /all -> ver todos "+"/id -> para ver uno" );
    }
}

export const controladorInicio = new IndexController();