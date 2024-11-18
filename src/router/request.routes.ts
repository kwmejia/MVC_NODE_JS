import express from "express";
import {
  renderAddRequestPage,
  renderViewRequestsPage,
  submitRequest,
  updateRequestStatus,
} from "../controllers/request.controller.js";

const router = express.Router();

// Ruta para mostrar el formulario de agregar solicitudes
router.get("/add", renderAddRequestPage);

// Ruta para mostrar todas las solicitudes
router.get("/", renderViewRequestsPage);

// Ruta para manejar el envío del formulario
router.post("/submit", submitRequest);

// Ruta para actualizar el estado de una solicitud
router.post("/requests/:id/status", updateRequestStatus);

export default router;
