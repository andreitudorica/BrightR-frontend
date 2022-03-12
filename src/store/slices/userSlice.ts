import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "store/store";

interface State {
  user: null | any;
}
export const initialState: State = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    login(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },

    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: AppState) => state.user.user;

export const userReducer = userSlice.reducer;
