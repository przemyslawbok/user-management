import { User } from '@/common';

export interface IRootState {
  users: User[]
}

export interface HeadCell {
  id: keyof User | 'edit' | 'delete';
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