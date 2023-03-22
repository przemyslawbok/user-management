import { Routes } from '@/common'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from '@reduxjs/toolkit/dist/query'
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import router from 'next/router'
import toast from 'react-hot-toast'

export const onEditClick = (id: number) => {
  return () => {
    router.push(`${Routes.Edit}/${id}`)
  }
}

export const onDeleteClick = (
    id: number, 
    deleteUser: MutationTrigger<MutationDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "User", any, "api">>, 
    isLoading: boolean) => {
  return async () => {
    try {
      await deleteUser({ id }).unwrap()
      if (!isLoading) 
        toast.success('User deleted successfully')
    }
    catch (error) {
      toast.error('Failed to delete user')
    }
  }
}