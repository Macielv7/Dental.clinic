import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import agendamentoController from "./controller/agendamentoController.js"

const server = express();
server.use(cors());
server.use(express.json());

server.use(agendamentoController);

server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));