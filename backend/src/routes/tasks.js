import express from "express";
import tasksController from "../controllers/taskscontrollers.js";


const router = express.Router();


// GET /tasks – Devuelve todas las tareas
// POST /tasks – Crea una nueva tarea
router
  .route("/")
  .get(tasksController.getTasks)
  .post(tasksController.createTask);

// GET /tasks/:id – Devuelve una tarea por su ID
// PUT /tasks/:id – Actualiza una tarea existente
// DELETE /tasks/:id – Elimina una tarea
router
  .route("/tasks/:id")
  .get(tasksController.getTaskById) // Asegúrate de que este método esté definido en tu controlador
  .put(tasksController.putTask)
  .delete(tasksController.deleteTask);

export default router;