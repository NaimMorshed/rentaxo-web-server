import { Router } from "express";
const router = Router();
import {
  getProperty,
  getPropertyById,
  postProperty,
  deleteProperty,
  updateProperty
} from "../controllers/property.controller";

router.get("/", getProperty);
router.get("/:id", getPropertyById);
router.post("/", postProperty);
router.delete("/:id", deleteProperty);
router.put("/:id", updateProperty);

export default router;
