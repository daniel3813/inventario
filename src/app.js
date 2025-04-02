import express from "express";
import categoriaRouter from "./routes/categorias.routes.js"

const app=express();

app.set("port",5000)

app.use("/api/categorias",categoriaRouter);

export default app;

