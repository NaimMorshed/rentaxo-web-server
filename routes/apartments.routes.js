import { Router } from "express";
const router = Router();
import {
  getApartments,
  getApartmentsById,
  postApartment,
  deleteApartment,
  updateApartment
} from "../controllers/apartments.controller";

router.get("/", getApartments);
router.get("/:id", getApartmentsById);
router.post("/", postApartment);
router.delete("/:id", deleteApartment);
router.put("/:id", updateApartment);

export default router;
