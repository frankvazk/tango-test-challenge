import express from "express";
import { Express } from "express";
import bodyParser from "body-parser";
import { config } from "./config";
import { routes } from "./network/routes";
import cors from "cors";

const app = express(); // Creamos nuestra instancia de express
/*Especificamos la ruta de entrada a nuestro servidor */
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
routes(app);
app.use("/app", express.static("public"));

/*Iniciamos el servidor en el puerto 3000*/
app.listen(config.port, () => {
  console.log(config.public);
  console.log("Servidor iniciado");
  console.log(config.host + ":" + config.port);
});
