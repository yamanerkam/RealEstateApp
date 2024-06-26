import express from 'express'
import { admin, loggedIn } from '../controllers/test.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'
const router = express.Router()

router.get('/should-be-logged-in', verifyToken, loggedIn)
router.get('/should-be-admin', admin)
export default router