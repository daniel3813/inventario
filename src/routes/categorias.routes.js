import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js"; 

const  router = Router();

router.get("/",categoriaController.getCategorias)
router.post("/",categoriaController.postCategorias)

export default router;