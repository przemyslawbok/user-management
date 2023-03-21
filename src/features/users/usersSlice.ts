import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/common'

const initialState: User[] = [
  { 
    id: 1,
    name: 'Przemek',
    username: 'Jules',
    email: 'a@a.pl',
    city: 'Białystok',
  },
    { 
    id: 2,
    name: 'Adam',
    username: 'Torineq',
    email: 'b@b.pl',
    city: 'Białystok',
  }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const user = {
        ...action.payload,
        id: Math.max(...state.map(user => user.id)) + 1
      }
      state.push(user)
    },
  }
})

interface IUserState {
  users: User[]
}

export const getAllUsers = (state: IUserState) => state.users

export const { addUser } = usersSlice.actions

export default usersSlice.reducer