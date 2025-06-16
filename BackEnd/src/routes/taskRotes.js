//este archivo sirve para definir que metoos del cud va atener mi ruta /api/products 

import express from "express";
import taskController  from "../controllers/taskController.js";

const router = express.Router ()

router.route("/").get(taskController.getBranch)
.post(taskController.insertTask)

router.route("/:id")
.put(taskController.updatetask)
.delete(taskController.deleteTask)

export default router;