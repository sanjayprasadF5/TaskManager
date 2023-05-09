const express = require("express")
const app = express()
const routes = require("./router/task.js")
const connectDB = require("./database/connection.js")
require("dotenv").config()
// middlewares
app.use(express.json())

// routes
app.get("/", (req, res) => {
	res.send("Hello World")
})

app.use("/api/v1/tasks", routes)

// // routes
// app.get("/api/v1/task")         --get all tasks
// app.post("/api/v1/task")        --create new task
// app.get("/api/v1/task/:id)      ---get single task
// app.patch("/api/v1/task/:id)    ---update task
// app.delete("/api/v1/task/:id)   ---delete task
const PORT = 3000

const start = async () => {
	try {
		const connection = await connectDB(process.env.MONGO_URL)
		if (connection) {
			console.log("Connect TO DB")
			app.listen(PORT, () => {
				console.log(`Server is running at ${PORT}`)
			})
		}
	} catch (error) {
		console.log(error)
	}
}

start()
