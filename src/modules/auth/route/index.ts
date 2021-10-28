import { Router } from "express";
const userRouter = Router();

import { authRegister } from "../controller/index.js";

userRouter.post("/register", authRegister);

export default userRouter;
