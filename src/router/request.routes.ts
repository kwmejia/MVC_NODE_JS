import express from "express";
import {
  renderAddRequestPage,
  renderViewRequestsPage,
  submitRequest,
} from "../controllers/request.controller.js";

const router = express.Router();

// Ruta para mostrar el formulario de agregar solicitudes
router.get("/add", renderAddRequestPage);

// Ruta para mostrar todas las solicitudes
router.get("/", renderViewRequestsPage);

// Ruta para manejar el envío del formulario
router.post("/submit", submitRequest);

export default router;
