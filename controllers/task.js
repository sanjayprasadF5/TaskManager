const Task = require("../models/Task")

const getAllTask = async (req, res) => {
	try {
		const task = await Task.find({})
		res.status(200).json({ task })
	} catch (error) {}
}
const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body)
		res.status(201).json({ task })
	} catch (error) {
		res.status(500).json({ error })
	}
}
const getTask = async (req, res) => {
	try {
		const { id: taskId } = req.params
		// const task = await Task.findById({ _id: id })

		const task = await Task.findById({ _id: taskId })
		console.log("Here is it ", task)
		if (!task) {
			console.log("INSIDE if")
			return res.status(404).json({ msg: `Task ${taskId}` })
		}
		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}
const updateTask = async (req, res) => {
	try {
		const { id: taskId } = req.params
		const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
			new: true,
			runValidators: true,
		})
		if (!task) {
			return res.status(404).json({ msg: `NO id match with ${taskID}` })
		}
		res.json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}
const deleteTask = async (req, res) => {
	try {
		const { id: taskId } = req.params
		const task = await Task.findOneAndDelete({ _id: taskId })
		console.log(typeof task)
		if (true) {
			return res.status(404).json({ msg: `Task ${taskId}` })
			// res.status(404).send(`Task ${taskId}`)
		}
		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask }
