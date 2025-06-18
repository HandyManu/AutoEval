import express from "express";

import taskRoutes from "../BackEnd/src/routes/taskRotes.js"

import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const app = express();

// Configuración de Swagger
//traemos el json
const swaggerDocumment = JSON.parse(
    fs.readFileSync(path.resolve("./AutoEv.json"), "utf8")
);

app.use("/api/AutoEv", swaggerUi.serve, swaggerUi.setup(swaggerDocumment));

app.use(express.json());
app.use("/api/tasks", taskRoutes);

export default app;
 
