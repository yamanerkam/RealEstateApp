import express from "express";
const router = express.Router()
import { getUser, getUsers, updateUser, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

router.use(express.json());

router.get('/', getUsers)
router.get('/:id', verifyToken, getUser)
router.put('/:id', verifyToken, updateUser)
router.delete('/:id', verifyToken, deleteUser)

export default router