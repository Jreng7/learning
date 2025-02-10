import { Router } from 'express'
import { TablesSessionsController } from '@/controllers/tables_sessions-controller' 

const tablesSessions = Router()
const tablesSessionsController = new TablesSessionsController()

tablesSessions.post('/', tablesSessionsController.create)


export { tablesSessions }