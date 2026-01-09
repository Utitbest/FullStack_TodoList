import express from "express";
import dotenv from "dotenv"
import { DBInitialize } from "./DB_SetUp/db.js";
import router from "./routes/todo.routes.js";
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url";



dotenv.config()
const PORT = process.env.PORT || 5000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const frontendPath = path.resolve(__dirname, "../frontend/dist")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/todo", router)

app.use(express.static(frontendPath))

app.get(/.*/, (req, res)=>{
    res.sendFile(path.resolve(frontendPath, "index.html"))
})

app.listen(PORT, ()=>{
    DBInitialize()
    console.log(`Server Port is${PORT}`)
})