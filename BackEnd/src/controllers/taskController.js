// Creo un array de funciones

const taskController = {};

import taskModel from "../models/task.js";

// SELECT
taskController.getBranch = async (req, res) => {
  const task = await taskModel.find();
  res.json(task);
};

// INSERT
taskController.insertTask = async (req, res) => {
  const { title , description , completed  } = req.body;
  const newTask = new taskModel({ title , description , completed});
  await newTask.save();
  res.json({ message: "Task saved" });
};

// DELETE
taskController.deleteTask = async (req, res) => {
  await taskModel.findByIdAndDelete(req.params.id);
  res.json({ message: "task deleted" });
};

// UPDATE
taskController.updatetask = async (req, res) => {
  const { title , description , completed } = req.body;
  const updatetask = await taskModel.findByIdAndUpdate(
    req.params.id,
    { title , description , completed },
    { new: true }
  );
  res.json({ message: "task updated successfully" });
};


export default taskController;