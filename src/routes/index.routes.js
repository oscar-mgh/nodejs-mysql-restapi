import { Router } from "express";
import { ping } from "../controllers/index.controllers.js";
const router = Router();

router.get("/", (req, res) => {
	res.send("<h1>HELLOOOOOO</h1>");
});
router.get("/ping", ping);

export default router;
