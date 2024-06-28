import express from "express";
const router = express.Router()
import { getUser, getUsers, updateUser, deleteUser } from "../controllers/user.controller.js";

router.use(express.json());

router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router