import { IContact } from "./contactTypes";

export interface GetContactsResponse {
  resources: IContact[];
  meta: {
    per_page: number;
    total: number;
    pages: number;
    page: number;
  };
}

export type GetContactsRequest = void;

export type DeleteContactResponse = void;

export type DeleteContactRequest = IContact["id"];

export interface GetContactByIdResponse {
  resources: [IContact];
}

export type GetContactByIdRequest = IContact["id"];

export type PutContactResponse = IContact;

export interface PutContactRequest {
  id: IContact["id"];
  tags: string[];
}

export type PostContactResponse = IContact;

export type PostContactRequest = Pick<IContact, "record_type" | "fields">;
