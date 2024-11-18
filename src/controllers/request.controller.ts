import { Request, Response } from "express";
import { getRequests, saveRequest } from "../models/request.model.js";

export const renderAddRequestPage = (req: Request, res: Response) => {
  res.render("add-request", { title: "Enviar Solicitud" });
};

// Ruta para ver las solicitudes
export const renderViewRequestsPage = (req: Request, res: Response) => {
  const query = ((req.query.query as string) || "").toLowerCase();
  let requests = getRequests();

  // Filtrar por cualquier campo si se proporciona un valor en la consulta
  if (query) {
    requests = requests.filter((request) =>
      Object.values(request).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
  }

  res.render("view-requests", {
    title: "Solicitudes Recibidas",
    requests,
    query,
  });
};

// Procesar una nueva solicitud
export const submitRequest = (req: Request, res: Response): void => {
  const { name, email, subject, message } = req.body;

  const newRequest = {
    id: Date.now(),
    name,
    email,
    subject,
    message,
    status: "Pendiente" as "Pendiente",
    response: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  saveRequest(newRequest);
  res.redirect("/");
};
