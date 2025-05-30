import { Server as SocketIOServer } from "socket.io";
import http from "http";

let io: SocketIOServer;

export const initSocket = (server: http.Server) => {
  io = new SocketIOServer(server, {
    cors: { origin: "*", methods: ["GET", "POST"] },
  });

  io.on("connection", (socket) => {
    console.log("Cliente conectado:", socket.id);
  });

  return io;
};

export const getSocket = () => {
  if (!io) {
    throw new Error("Socket.IO no ha sido inicializado correctamente.");
  }
  return io;
};
