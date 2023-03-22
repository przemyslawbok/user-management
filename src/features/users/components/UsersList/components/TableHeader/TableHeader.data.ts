import { UserFieldName } from '@/common';

export interface HeadCell {
  id: UserFieldName | 'edit' | 'delete'
  label: string;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    label: 'Id',
  },
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'username',
    label: 'Username',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'city',
    label: 'City',
  },
  {
    id: 'edit',
    label: 'Edit',
  },
  {
    id: 'delete',
    label: 'Delete',
  }
];