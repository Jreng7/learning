import yup from 'yup'

export const getSchema = yup.object().shape({
  status: yup.string().required().test('isValid', (verify) => {
    if (verify === 'in_progress' || verify === 'completed') {
      return true;
    } else {
      return false;
    }
  })
})

