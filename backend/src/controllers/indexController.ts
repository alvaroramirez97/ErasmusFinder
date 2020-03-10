import { Request, Response} from 'express';

var path = require('path');

class IndexController{
    inicio(req: Request, res: Response){
        res.sendFile(path.join("src/indice.html"));
        
    }
    
}

export const controladorInicio = new IndexController();