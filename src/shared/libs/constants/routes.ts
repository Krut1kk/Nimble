import { routeConfig } from "@/app/config/route";

export const getContactsRoute = () => routeConfig.contacts;

export const getSingleContactRoute = (id: string | number) =>
  routeConfig.singleContact.replace(":id", id.toString());
