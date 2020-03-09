import { Router } from "express";
import {
  updateProject,
  deleteProject,
  getOneProject,
  getProjects,
  createProject
} from "../controllers/project.controller";

const router = Router();

router.get("/", getProjects);
router.get("/:id", getOneProject);
router.post("/", createProject);
router.delete("/:id", deleteProject);
router.put("/:id", updateProject);

export default router;
