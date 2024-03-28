const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
    status: { type: Boolean, default: false } // Adding status field with default value
})

const TaskModel = mongoose.model("task", taskSchema)

module.exports = {
    TaskModel
}
