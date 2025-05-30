import { Sequelize } from "sequelize";

export const bd = new Sequelize({
  dialect: "sqlite",
  storage: "./task_bd.sqlite",
  logging: false,
});

bd.sync({ alter: true })
  .then(() => console.log("✅ Base de datos sincronizada correctamente"))
  .catch((err) => console.error("❌ Error en la sincronización:", err));

export default bd; // Exportar la instancia de Sequelize para su uso en otros módulos
