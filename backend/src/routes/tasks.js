import express from "express";
import tasksController from "../controllers/taskscontrollers.js";


const router = express.Router();

router
.route("/")
.get(tasksController.getTasks)
.post(tasksController.createTask)

router
.route("/:id")
.put(tasksController.putTask)
.delete(tasksController.deleteTask);

export default router;