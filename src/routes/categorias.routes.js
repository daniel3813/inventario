import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js"; 

const  router = Router();

/*get */
router.get("/",categoriaController.getCategorias); /*read*/ 
router.post("/",categoriaController.postCategorias);/*create */
/*ruta que recibe un parametro */
router.get("/:id",categoriaController.getCategory);/*red */
/*Ruta que recibe como parametro el cuerpo del id a actualizar */
router.put("/:id",categoriaController.updateCategorias);/*create */
/*Ruta que recibe paramtero id de categoria a borrar*/
router.delete("/:id",categoriaController.deleteCategory);/*para eliminar una categoria */

/*hacemos disponible el router en otda la app */
export default router;