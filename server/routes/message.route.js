import { Router } from "express";
import {
  getMessages,
  postMessages,
} from "../controllers/message.controller.js";
const messageRouter = Router();
messageRouter.post("/post", postMessages);
messageRouter.get("/get", getMessages);
export default messageRouter;
