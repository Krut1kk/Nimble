import { IContact } from "../../model/types/contactTypes";

const queryKey = "CONTACTS";

export const contactQueryKeys = {
  all: [queryKey] as const,
  list: () => [{ type: queryKey, id: "LIST" }] as const,
  item: (id: IContact["id"]) => [{ type: queryKey, id: id }] as const,
};
