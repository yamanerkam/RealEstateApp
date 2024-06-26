import express from 'express'
import { admin, loggedIn } from '../controllers/test.controller.js'
const router = express.Router()

router.get('/should-be-logged-in', loggedIn)
router.get('/should-be-admin', admin)
export default router