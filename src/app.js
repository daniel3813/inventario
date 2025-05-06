import express from "express";
import cors from "cors"
import categoriaRouter from "./routes/categorias.routes.js";
import empleadoRouter from "./routes/empleados.routes.js";
import clienteRouter from "./routes/clientes.routes.js";
import productoRouter from "./routes/productos.routes.js";


const app=express();
app.set("port",5000)
app.use(express.json());
app.use(cors());
app.use("/api/categorias",categoriaRouter);
app.use("/api/empleados",empleadoRouter);
app.use("/api/clientes",clienteRouter);
app.use("/api/productos",productoRouter);


export default app;

