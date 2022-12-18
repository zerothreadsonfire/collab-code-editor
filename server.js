import express from "express";
import { Server } from 'socket.io';

const app = express();

const server = app.listen(5000, () => {

})

const io = Server(server);