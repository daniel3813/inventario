import { Router } from "express";
import { methodHTTP as productosControllers } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/", productosControllers.getProductos);
router.put("/:id", productosControllers.putProducto);

export default router;
