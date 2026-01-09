import mongoose from "mongoose";


const TotoSchema = await mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    orderIndex: {
        type: Number,
        default: 0
    }
})

export default mongoose.model("Todo", TotoSchema)