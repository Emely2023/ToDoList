import express from "express";
import cookieParser from "cookie-parser";



const app = express(); 




//  que acepte datos en json
app.use(express.json());

//que postman acepte guardar cookies
app.use(cookieParser())


export default app;
