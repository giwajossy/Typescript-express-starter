import express from 'express'
import Users from '../handlers/users'

const router = express.Router()

/* Route to get all users */
router.get('/', Users.getAllSubjects)

export default router