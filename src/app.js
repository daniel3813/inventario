import express from "express";
import categoriaRouter from "./routes/categorias.routes.js"
import cors from "cors"

const app=express();

app.set("port",5000)
app.use(express.json());

app.use(cors());


app.use("/api/categorias",categoriaRouter);

export default app;

