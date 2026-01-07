import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type store from "./store";

interface UserState {
  token: string | null;
}

const initialState: UserState = {
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = null;
    },
  },
});

export const { addToken, deleteToken } = userSlice.actions;
export default userSlice.reducer;

export type RootState = ReturnType<typeof store.getState>;

export const selectUserToken = (state: RootState) => state.user.token;
