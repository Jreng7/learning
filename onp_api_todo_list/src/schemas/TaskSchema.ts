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

