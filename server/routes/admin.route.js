import { Router } from "express";
import { login } from "../controllers/admin.auth.js";
const adminRouter = Router();
adminRouter.post("/login", login);

export default adminRouter;
