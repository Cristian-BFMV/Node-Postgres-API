import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Task from "./Taks";
/**Creando el modelo para la tabla Project, de acuerdo a la base de datos */
const Project = sequelize.define(
  "projects",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT
    },
    priority: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    deliverydate: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);
/**Asociando la tabla Project a la tabla task, como clave foranea */
Project.hasMany(Task, { foreingKey: "projectid", sourceKey: "id" });
Task.belongsTo(Project, { foreingKey: "projectid", sourceKey: "id" });

export default Project;
