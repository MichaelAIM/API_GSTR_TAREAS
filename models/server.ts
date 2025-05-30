import express, { Application } from "express"; //importar express
import http from "http";
import os from "os";
import { Server as serverSocket } from "socket.io";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import db from "../BD/connection";
import taskRoutes from "../routes/taskRoutes";
import { initSocket } from "../config/socket";

dotenv.config();
/**
 * Clase Server - Maneja la configuración del servidor Express
 */
class Server {
  // Clase Server

  private app: Application; // Instancia de Express
  private port: string; //  Variable para puerto
  private httpServer: http.Server; // Servidor HTTP
  private io: serverSocket; // Instancia de Socket.IO
  private apiPath = {
    task: "/api/task",
  };
  /**
   * Constructor - Inicializa la aplicación Express y configura el puerto
   */
  constructor() {
    this.app = express(); // inicializa express
    this.port = process.env.PORT || "8000"; // inicializa el puerto
    this.httpServer = http.createServer(this.app); // Crear servidor HTTP
    this.io = initSocket(this.httpServer); // Inicializar Socket.IO con el servidor HTTP
    this.bdConnection();
    this.middlewares();
    this.routes();
  }

  /**
   * Método start - Inicia el servidor y configura middlewares, rutas y conexión a la base de datos
   * @returns void
   */
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json()); // Lectura y parseo del body
    // this.app.use("/", express.static(path.join("dist/public")));
    this.app.use(express.static(path.join(__dirname, "../public")));
  }
  /**
   * Método routes - Configura la Base de datos de la aplicación
   * @returns void
   */
  async bdConnection() {
    try {
      await db.authenticate();
      console.log("Conexión a SQLite exitosa.");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  }
  /**
   * Método routes - Configura las rutas de la aplicación
   * @returns void
   */
  routes() {
    // Rutas existentes
    this.app.use(this.apiPath.task, taskRoutes);
  }
  /**
   * Método listen - Inicia el servidor HTTP
   * @returns void
   */
  listen() {
    this.httpServer.listen(this.port, () => {
      console.log(`🚀 Servidor corriendo en puerto ${this.port}`);
      console.log(`🌐 IP local: ${this.getLocalIP()}`);
    });
    // this.app.listen(this.port, () => {
    //   console.log("Servidor corriendo en puerto " + this.port);
    // });
  }
  getLocalIP = () => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const net of interfaces[name] || []) {
        if (net.family === "IPv4" && !net.internal) {
          return net.address;
        }
      }
    }
    return "No se encontró IP local";
  };
}

export default Server; // Exportar la clase Server para su uso en otros módulos
