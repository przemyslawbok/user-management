import { Routes, User } from '@/common'
import { toggle } from '@/features/ui'
import { AnyAction } from '@reduxjs/toolkit'
import router from 'next/router'
import { Dispatch } from 'react'

export const onEditClick = (id: number) => {
  return () => {
    router.push(`${Routes.Edit}/${id}`)
  }
}

export const onDeleteClick = (dispatch: Dispatch<AnyAction>, user: User) => {
  return () => dispatch(toggle({ userId: user.id, username: user.username }))
}