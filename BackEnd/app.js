import express from "express";

//import clientesRoutes from "../Backend/src/routes/clientes.js";


const app = express();

app.use(express.json());
//app.use("/api/clientes", clientesRoutes);
 

export default app;