import { createSlice } from '@reduxjs/toolkit'
import { User } from '@/common';

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

  }
})

export default usersSlice.reducer;