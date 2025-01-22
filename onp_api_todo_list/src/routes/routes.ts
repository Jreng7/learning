import { Router } from 'express'

export const router = Router()

router.get('/tasks')
router.get('/task/:id_task')
router.post('/task')
router.put('/task/:id_task')
router.delete('task/:id_task')