import express, { json } from "express";
import morgan from "morgan";
import projectRoutes from "./routes/projects";
import taskRoutes from "./routes/tasks";
//Creando el servidor
const app = express();

/*Configurando los middlewares del servidor*/

//Morgan nos da información sobre las operaciones que realiza el servidor
app.use(morgan("dev"));
//El modulo json permite que nuestro servidor pueda enteder el formato json
app.use(json());

/*Configurando los enrutadores del servidor*/

app.use("/api/projects", projectRoutes);
app.use("/api/task", taskRoutes);

export default app;
