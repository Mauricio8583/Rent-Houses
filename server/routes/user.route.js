import express from "express";
import { deleteUser } from "../controllers/user.controler.js";

const router = express.Router();

router.delete("/:id", deleteUser)

export default router