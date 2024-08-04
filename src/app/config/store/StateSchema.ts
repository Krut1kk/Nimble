import { devnimbleAPI } from "@/shared/api/devnimbleAPI";

export interface StateSchema {
  [devnimbleAPI.reducerPath]: ReturnType<typeof devnimbleAPI.reducer>;
}
