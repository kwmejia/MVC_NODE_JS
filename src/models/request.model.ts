import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolver rutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/database.json");

// Definir el tipo para las solicitudes
export interface Request {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "Pendiente" | "En Proceso" | "Resuelta";
  response: string | null;
  created_at: string;
  updated_at: string;
}

// Leer todas las solicitudes
export const getRequests = (): Request[] => {
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
};

// Guardar una nueva solicitud
export const saveRequest = (request: Request): void => {
  const requests = getRequests();
  requests.push(request);
  fs.writeFileSync(dataPath, JSON.stringify(requests, null, 2));
};

export const updateRequest = (
  id: number,
  updates: Partial<{ status: string }>
) => {
  const requests = getRequests();
  const index = requests.findIndex((request) => request.id === id);

  if (index !== -1) {
    requests[index] = {
      ...requests[index],
      ...updates,
      updated_at: new Date().toISOString(),
    } as Request;
    fs.writeFileSync(dataPath, JSON.stringify(requests, null, 2));
    return true;
  }
  return false;
};
