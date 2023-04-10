import { Router } from 'express'

import UserController from './controllers/UserController'

const router = Router()

router.post('/user', UserController.createUser)
router.get('/users', UserController.findAllUser)
router.get('/users/:id', UserController.findUser)
router.put('/user/:id', UserController.updateUser)
router.delete('/user-delete/:id', UserController.deleteUser)

export { router }