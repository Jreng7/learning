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
  id_task: string().required()
})

export const addSchema = object().shape({
  id: string().required('O id é obrigatório.'),
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

export const updateSchema = object().shape({
  id: string().required("Item obrigatório"),
  description: string().required("Item obrigatório"),
  data: string().required("Item obrigatório"),
  status: string().required("Item obrigatório"),
  id_task: string()
})