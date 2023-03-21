import { Routes, User } from '@/common';
import router from 'next/router';
import { SubmitHandler } from 'react-hook-form';

export const onSubmit = (formSubmitAction: (data: User) => void) => {
    const result: SubmitHandler<User> = (data) => {
      formSubmitAction(data);
      router.push(Routes.Home)
    }

    return result;
  }

export  const onCancelClick = () => {
    router.push(Routes.Home)
  }