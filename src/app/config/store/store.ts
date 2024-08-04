// redux
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
// reducers
import { devnimbleAPI } from "@/shared/api/devnimbleAPI";
// types
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [devnimbleAPI.reducerPath]: devnimbleAPI.reducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(devnimbleAPI.middleware),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
