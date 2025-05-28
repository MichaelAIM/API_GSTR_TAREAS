import express, { Application } from "express"; //importar express
/**
 * Clase Server - Maneja la configuración del servidor Express
 */
class Server {
  // Clase Server

  private app: Application; // Instancia de Express
  private port: string; //  Variable para puerto
  /**
   * Constructor - Inicializa la aplicación Express y configura el puerto
   */
  constructor() {
    this.app = express(); // inicializa express
    this.port = process.env.PORT || "8000"; // inicializa el puerto
  }
  /**
   * Método listen - Inicia el servidor HTTP
   * @returns void
   */
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server; // Exportar la clase Server para su uso en otros módulos
