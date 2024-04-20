import express from "express";
import { getAllContacts,postAllContacts } from "../controller/productController.js";

const router = express.Router();

router.get("/",getAllContacts);

router.post("/",postAllContacts);

export default router;