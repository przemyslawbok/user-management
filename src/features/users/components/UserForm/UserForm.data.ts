import { User, UserFieldName } from '@/common'
import * as yup from 'yup'

export interface IUserFormProps {
  user?: User
  formSubmitAction: (data: User) => Promise<void>
  isLoading: boolean
}

export const FormFieldNames = {
  Name: 'name' as UserFieldName,
  Username: 'username' as UserFieldName,
  Email: 'email' as UserFieldName,
  City: 'city' as UserFieldName
}

export const ValidationSchema = yup.object().shape({
  name: yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Name is required'),
  username: yup.string()
    .min(3, 'Username must be at least 3 characters long')
    .max(20, 'Username must be maximum of 20 characters long')
    .required('Username is required'),
  email: yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Email is not in valid email format')
    .required('Email is required'),
  city: yup.string()
    .min(3, 'City must be at least 3 characters long')
    .required('City is required')
})