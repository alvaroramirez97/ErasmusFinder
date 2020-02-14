import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rutasInicio from './routes/indexRoutes';
import rutasUsuario from './routes/usuarioRoutes';

class Server{

    public app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.enrutado();
    }

    config():void{
        this.app.set('port', process.env.PORT||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }
    enrutado():void{
        this.app.use('/', rutasInicio);
        this.app.use('/usuarios', rutasUsuario);
    }
    start(){
        this.app.listen(this.app.get('port'),()=>console.log('Servidor escuchando en el puerto', this.app.get('port')));
    }
}

const servidor = new Server();
servidor.start();