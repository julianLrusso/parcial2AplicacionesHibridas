import express from 'express';
import projectRoutes from './routes/project.routes.js'
import usersRoutes from "./routes/users.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', projectRoutes);
app.use('/api/', usersRoutes);

app.listen(2052, function () { console.log('Me pude conectar a http://localhost:2052') })
