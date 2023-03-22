import { User, UserFieldName } from '@/common';
import { FieldError, UseFormRegister } from 'react-hook-form';

export interface IFormFieldProps {
  fieldName: UserFieldName,
  label: string,
  register: UseFormRegister<User>
  error?: FieldError
}