// api
import { devnimbleAPI } from "@/shared/api/devnimbleAPI";
// constants
import { contactQueryKeys } from "../libs/constants/contactQueryKeys";
// types
import {
  DeleteContactRequest,
  DeleteContactResponse,
  GetContactByIdRequest,
  GetContactByIdResponse,
  GetContactsRequest,
  GetContactsResponse,
  PostContactRequest,
  PostContactResponse,
  PutContactRequest,
  PutContactResponse,
} from "../model/types/contactsAPItypes";

const contactAPI = devnimbleAPI.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query<GetContactsResponse, GetContactsRequest>({
      query: () => ({
        url: "/contacts?sort=created:desc",
        method: "GET",
      }),
      providesTags: contactQueryKeys.list(),
    }),
    getContactByid: builder.query<
      GetContactByIdResponse,
      GetContactByIdRequest
    >({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "GET",
      }),
      providesTags: (_data, _error, arg) => contactQueryKeys.item(arg),
    }),
    postContact: builder.mutation<PostContactResponse, PostContactRequest>({
      query: (contact) => ({
        url: "/contact",
        method: "POST",
        body: {
          ...contact,
        },
      }),
      invalidatesTags: contactQueryKeys.list(),
    }),
    updateContactTags: builder.mutation<PutContactResponse, PutContactRequest>({
      query: (info) => ({
        url: `/contacts/${info.id}/tags`,
        method: "PUT",
        body: {
          tags: info.tags,
        },
      }),
      invalidatesTags: (_data, _error, arg) => [
        ...contactQueryKeys.list(),
        ...contactQueryKeys.item(arg.id),
      ],
    }),
    deleteContact: builder.mutation<
      DeleteContactResponse,
      DeleteContactRequest
    >({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_data, _error, arg) => [
        ...contactQueryKeys.list(),
        ...contactQueryKeys.item(arg),
      ],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useGetContactByidQuery,
  useUpdateContactTagsMutation,
  usePostContactMutation,
} = contactAPI;
