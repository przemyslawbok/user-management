import { User } from '@/common'
import { toggle } from '@/features'
import { AnyAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'

export const onDeleteClick = (dispatch: Dispatch<AnyAction>, user: User) => {
  return () => dispatch(toggle({ userId: user.id, username: user.username }))
}