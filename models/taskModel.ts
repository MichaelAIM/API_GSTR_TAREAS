import { DataTypes } from "sequelize";
import db from "../BD/connection";

const Task = db.define("task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 100],
    },
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pendiente",
  },
});

export default Task;
