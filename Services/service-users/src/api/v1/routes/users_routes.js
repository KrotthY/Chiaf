import { Router } from 'express'
import { getUsers } from '../controllers/users_controller.js'
const router = Router();


router.get('/users/:id',getUsers)

export default router