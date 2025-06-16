import express from "express";

import taskRoutes from "../BackEnd/src/routes/taskRotes.js"


const app = express();

app.use(express.json());
app.use("/api/tasks", taskRoutes);

export default app;
 
