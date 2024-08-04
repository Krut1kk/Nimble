// redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// enteties
import { contactQueryKeys } from "@/enteties/contact/libs/constants/contactQueryKeys";

export const devnimbleAPI = createApi({
  reducerPath: "DevnimbleAPI",
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.VITE_PROXY_URL + import.meta.env.VITE_BACKEND_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_DEVNIMBLE_API_KEY}`
      );

      return headers;
    },
  }),
  tagTypes: [...contactQueryKeys.all],

  endpoints: (_builder) => ({}),
});
