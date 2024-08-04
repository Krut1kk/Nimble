export { useGetContactsQuery, useGetContactByidQuery } from "./api/contactAPI";

export {
  useUpdateContactTags,
  useAddContact,
} from "./libs/constants/contactQueryHooks";

export { ContactItemsList } from "./ui/ContactItemsList/ContactItemsList";

export { ContactItem } from "./ui/ContactItem/ContactItem";

export type { IContact } from "./model/types/contactTypes";
