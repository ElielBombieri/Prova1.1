import Express from "express";
import cors from "cors";
import Plano from "./controllers/Plano.js"
import Assinatura from "./controllers/Assinatura.js";

//confs da api
const api = Express();
api.use(Express.json());
api.use(cors());

//Rotas Plano
api.get("/Planos", Plano.readAllPlano)
api.get("/Plano/:id", Plano.readPlano)
api.post("/Plano", Plano.createPlano)
api.delete("/Plano/:id", Plano.deletePlano)
api.put("/Plano/:id", Plano.updatePlano)

//Rotas Assinatura
api.get("/Assinaturas", Assinatura.readAllAssinatura)
api.get("/Assinatura/:id", Assinatura.readAssinatura)
api.post("/Assinatura", Assinatura.createAssinatura)
api.delete("/Assinatura/:id", Assinatura.deleteAssinatura)
api.put("/Assinatura/:id", Assinatura.updateAssinatura)

//iniciar a api
function iniciarServidor() {
    console.log("API rodando na porta 3000");
}
api.listen(3000, iniciarServidor);