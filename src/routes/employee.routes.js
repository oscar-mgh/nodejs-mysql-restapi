import { Router } from "express";
import {
	createEmploye,
	deleteEmploye,
	getEmployes,
	getEmployeById,
	updateEmploye,
} from "../controllers/employee.controller.js";

const router = Router();

router.post("/", createEmploye);
router.get("/", getEmployes);
router.get("/:id", getEmployeById);
router.patch("/:id", updateEmploye);
router.delete("/:id", deleteEmploye);

export default router;
