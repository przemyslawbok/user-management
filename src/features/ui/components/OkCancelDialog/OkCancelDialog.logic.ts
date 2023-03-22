import { AnyAction } from '@reduxjs/toolkit'
import { MutationDefinition, BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query'
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { Dispatch } from 'react'
import toast from 'react-hot-toast'
import { toggle } from '../../uiSlice'

export const onCancelClick = (dispatch: Dispatch<AnyAction>) => {
  return () => dispatch(toggle({ userId: undefined, username: undefined }))
}

export const onDeleteClick = (
    id: number, 
    dispatch: Dispatch<AnyAction>,
    deleteUser: MutationTrigger<MutationDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "User", any, "api">>, 
    isSuccess: boolean) => {
  return async () => {
    try {
      await deleteUser({ id }).unwrap()
      if (isSuccess) toast.success('User deleted successfully')
    }
    catch (error) {
      //Logging logic here
      console.log(error)
      toast.error('Failed to delete user')
    }
    finally {
      dispatch(toggle({ userId: undefined, username: undefined }))
    }
  }
}