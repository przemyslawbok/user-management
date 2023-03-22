import { Routes, User } from '@/common';
import router from 'next/router';
import { SubmitHandler } from 'react-hook-form';
import { FormFieldNames } from './UserForm.data';

export const getDefaultValues = (user?: User) => {
    return {
    [FormFieldNames.Name]: user?.name,
    [FormFieldNames.Username]: user?.username,
    [FormFieldNames.Email]: user?.email,
    [FormFieldNames.City]: user?.city,
  }
}

export const onSubmit = (formSubmitAction: (data: User) => Promise<void>, isLoading: boolean) => {
    const result: SubmitHandler<User> = async (data) => {
      await formSubmitAction(data);
      if (!isLoading)
        router.push(Routes.Home)
    }

    return result;
  }

export  const onCancelClick = () => {
    router.push(Routes.Home)
  }