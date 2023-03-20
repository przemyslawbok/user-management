import { Routes } from '@/common';
import router from 'next/router';

export const onAddUserClick = () => {
  router.push(Routes.Add);
}