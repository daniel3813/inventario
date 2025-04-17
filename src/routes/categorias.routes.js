import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js"; 

const  router = Router();

router.get("/",categoriaController.getCategorias)
router.post("/",categoriaController.postCategorias)
router.get("/:id",categoriaController.getCategory);/*create */


export default router;