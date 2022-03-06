import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userReducer } from "./slices/userSlice";
import { loadState, saveState } from "./persistence";

const preloadedState = loadState();

export function makeStore() {
  return configureStore({
    reducer: { user: userReducer },
    preloadedState,
  });
}

const store = makeStore();

store.subscribe(() => {
  saveState(store.getState());
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
