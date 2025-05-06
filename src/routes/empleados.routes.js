import { Router } from "express";
import { methodHTTP as EmpleadosControllers } from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/", EmpleadosControllers.getEmpleados);

export default router;
