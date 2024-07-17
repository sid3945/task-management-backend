const Task = require('../models/task');

async function getTasks (req, res) {
	try {
		const tasks = await Task.find();
		res.json(tasks);
	} catch (error) {
		console.error("Get tasks error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const createTask = async (req, res) => {
	try {
		const { title, description, dueDate } = req.body;
		const task = new Task({ title, description, dueDate });
		await task.save();
		res.status(201).json(task);
	} catch (error) {
		console.error("Create task error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const updateTask = async (req, res) => {
	try {
		const { title, description, status, dueDate } = req.body;
		const task = await Task.findByIdAndUpdate(req.params.id, { title, description, status, dueDate }, { new: true });
		if (!task) return res.status(404).json({ error: "Task not found" });
		res.json(task);
	} catch (error) {
		console.error("Update task error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const deleteTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);
		if (!task) return res.status(404).json({ error: "Task not found" });
		res.json({ message: "Task deleted successfully" });
	} catch (error) {
		console.error("Delete task error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = { getTasks, createTask, updateTask, deleteTask };