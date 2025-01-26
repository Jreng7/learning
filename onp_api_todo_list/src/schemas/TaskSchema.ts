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

export const getAddSchema = object().shape({
  id: string().required(),
  description: string().required(),
  data: string().required(),
  status: string().required()
})