import { Router } from "express";
import { messageController } from "../controllers/messageController.js";

const router = Router();

router.post("/process-message", messageController);

export default router;
