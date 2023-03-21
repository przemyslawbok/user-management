import { Routes } from '@/common'
import router from 'next/router'

export const onEditClick = (id: number) => {
  const result = () => {
    router.push(`${Routes.Edit}/${id}`)
  }

  return result
}