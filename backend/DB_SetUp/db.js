import mongoose from "mongoose";


const DBInitialize = async()=>{
    try {
        await mongoose.connect(process.env.MONGDB_URL)
        console.log(`${mongoose.connection.name}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export {DBInitialize};