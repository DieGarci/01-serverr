import Server from './clases/server';
import  {router}  from './routes/router';
import bodyParser from "body-parser";
import cors from 'cors' 

const server =  new Server();
//Body parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//cors
server.app.use(cors({origin:true, credentials: true}));
server.app.use('/',router)

server.star(()=>{
    console.log(`El servidor esta corriendo en el puerto ${server.port}`)
})
