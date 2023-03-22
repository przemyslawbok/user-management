import { UIState } from '@/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UIState = {
  userId: undefined,
  username: ''
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: (state: UIState, { payload }: PayloadAction<UIState>) => {
      state.userId = payload.userId
      state.username = payload.username
    }
  }
})

export const { toggle } = uiSlice.actions

export default uiSlice.reducer