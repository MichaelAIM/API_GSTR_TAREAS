import dotenv from "dotenv"; // importar dotenv
import Server from "./models/server"; //importar server.ts

// Configurar dot.env
dotenv.config();

const server = new Server(); //Instanciar clase server

server.listen(); // Inicializar el método listen() de la clase server
