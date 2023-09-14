import express from "express";
import cors from "cors";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import userRoutes from './components/users/users.routes.js';
import taskRoutes from './components/tasks/tasks.routes.js';
import categoryRoutes from './components/categories/categories.routes.js'
import "dotenv/config";

initModels();

db.authenticate()
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch((e) => console.error(e));

db.sync()
  .then(() => console.log("Base de datos sincronizada"))
  .catch((e) => console.error(e));

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(taskRoutes);
app.use(categoryRoutes);



app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
