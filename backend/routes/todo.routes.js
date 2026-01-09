import express, { json } from "express";
import Todo from "../models/Todo.Schema.js"
import mongoose from "mongoose";

const router = express.Router()


router.get("/", async(req, res)=>{
    try {
        const data = await Todo.find().sort({orderIndex: 1})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error: "Failed to Fetch Todo!", message: error})
        console.log(error)
    }
})


router.post("/", async(req, res)=>{
    try {
        const {task} = req.body

        if(!task)return res.status(404).json({error: "Missing task!"})


        await Todo.updateMany({}, {$inc: {orderIndex: 1}})

        const tasks = await Todo.create({
            task,
            completed: false,
            orderIndex: 0
        })

        res.status(201).json(tasks)
    } catch (error){
        res.status(500).json({error: "Failed to Add Todo!", message: error})
        console.log(error)
    }
})

router.put("/order", async(req, res)=>{
    try {
        const { tasks } = req.body;

        if(!Array.isArray(tasks)) return res.status(400).json({error: "Invalid task order!"})

        const updateObject = tasks.map(task => ({
            updateOne: {
                filter: {_id: task.id},
                update: {
                    $set: {orderIndex: task.orderIndex}
                }
            }
        }));

        await Todo.bulkWrite(updateObject)

        res.json({success: true})
    } catch (error) {
        res.status(500).json({error: "Failed to re-order task!", message: error})
        console.log(error)
    }
})

router.put("/completed/:id", async(req, res)=>{
    try {
        const id = req.params.id
        const { completed } = req.body;

        if(typeof completed !== "boolean") return res.status(400).json({error: "Invaild value type!"})
            
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: "Invalid Id"})

        const completedTask = await Todo.findByIdAndUpdate(
            id,
            { completed },
            {new: true}
        )

        if(!completedTask) return res.status(404).json({error: "Task not found!"});

        res.status(200).json({success: true})
    } catch (error) {
        res.status(500).json({error: "Failed to Update completed task!", message: error})
        console.log(error)
    }
})

router.delete("/delete", async(req, res)=>{
    try {
        const deleteted = await Todo.deleteMany({completed: true})
        if(deleteted.deletedCount === 0) return res.status(404).json({error: "No completed task found!"})

        res.status(200).json({success: true})
    } catch (error) {
        res.status(500).json({error: "Failed to delete task!", message: error})
        console.log(error)
    }
})

export default router