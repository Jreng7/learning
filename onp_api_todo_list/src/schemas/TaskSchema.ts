import { object, string } from 'yup'

export const getSchema = object().shape({
  status: string().required().test('isValid', (verify) => {
    if (verify === 'in_progress' || verify === 'completed') {
      return true;
    } else {
      return false;
    }
  })
})

export const getByIdSchema = object().shape({
  id_task: string().required().uuid()
})

export const addSchema = object().shape({
  description: string().required(),
  data: string().required(),
  status: string().required().test('addIsvalid', (status) => {
    if ( status === 'completed' || status === 'in_progress' ) {
      return true
    } else {
      return false
    }
  })
})

export const updateSchema = object().shape ({
  id: string().required("Item obrigatório"),
  description: string().required("Item obrigatório"),
  data: string().required("Item obrigatório"),
  status: string().required("Item obrigatório").test('isValid', 'Status inválido', (status) => {
    return status === 'completed' || status === 'in_progress'; })

})

export const updateSchemaParams = string().required().uuid()

export const deleteSchema = string().required().uuid()