import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()


router.route('/').get(userController.getUser)

router.route('/').post(userController.createUser)

router.route('/').put(userController.updateUser)

router.route('/').delete(userController.deleteUser)

export default router