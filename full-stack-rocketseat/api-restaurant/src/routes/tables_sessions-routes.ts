import { Router } from 'express'
import { TablesSessionsController } from '@/controllers/tables_sessions-controller' 

export const tablesSessions = Router()
const tablesSessionsController = new TablesSessionsController()


tablesSessions.post('/tables-sessions', tablesSessionsController.create)


