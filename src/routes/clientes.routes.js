import { Router } from "express";
import { methodHTTP as clienteController } from "../controllers/clientes.controllers.js";

const router = Router();

router.get("/", clienteController.getClientes);
router.post("/", clienteController.postCliente);

export default router;