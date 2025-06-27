import TasksModel from "../models/Tasks.js";

const tasksController = {};

// GET /tasks – Obtener todas las tareas
tasksController.getTasks = async (req, res) => {
  try {
    const tasks = await TasksModel.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las tareas" });
  }
};

// GET /tasks/:id – Obtener una tarea específica
tasksController.getTaskById = async (req, res) => {
  try {
    const task = await TasksModel.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la tarea" });
  }
};

// POST /tasks – Crear una nueva tarea
tasksController.createTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const newTask = new TasksModel({ title, description, completed });
    await newTask.save();
    res.status(201).json({ message: "Tarea guardada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la tarea" });
  }
};

// PUT /tasks/:id – Actualizar una tarea existente
tasksController.putTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const updated = await TasksModel.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Tarea no encontrada para actualizar" });
    }
    res.json({ message: "Tarea actualizada correctamente", tarea: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la tarea" });
  }
};

// DELETE /tasks/:id – Eliminar una tarea
tasksController.deleteTask = async (req, res) => {
  try {
    const deleted = await TasksModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la tarea" });
  }
};

export default tasksController;
