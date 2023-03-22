import { Routes } from '@/common'
import router from 'next/router'

export const onEditClick = (id: number) => {
  return () => {
    router.push(`${Routes.Edit}/${id}`)
  }
}