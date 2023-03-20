import { UserFieldName } from '@/common'
import * as yup from 'yup'

export const FormFieldNames = {
  Name: 'name' as UserFieldName,
  Username: 'username' as UserFieldName,
  Email: 'email' as UserFieldName,
  City: 'city' as UserFieldName
}

export const validationSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  username: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  city: yup.string().min(3).required()
})