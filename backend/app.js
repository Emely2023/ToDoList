import express from "express";
import cookieParser from "cookie-parser";
import tasksRoutes from "./src/routes/tasks.js";


const app = express(); 
//que postman acepte guardar cookies
app.use(cookieParser())



//  que acepte datos en json
app.use(express.json());



app.use("/api/tasks", tasksRoutes);



export default app;
