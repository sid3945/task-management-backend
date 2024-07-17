const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: { type: String, required: true },
	description: { type: String, required: true },
	status: { type: String, enum: ["pending", "in progress", "completed"], default: "pending" },
	dueDate: { type: Date, required: true },
},
{
    timestamps: true
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;