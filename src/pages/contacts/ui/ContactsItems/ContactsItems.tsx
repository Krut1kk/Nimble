// react
import { FC } from "react";
// enteties
import { ContactItemsList, useGetContactsQuery } from "@/enteties/contact";
// styles
import styles from "./ContactsItems.module.scss";

interface ContactsItemsProps {}

export const ContactsItems: FC<ContactsItemsProps> = ({}) => {
  const { data, isError, isLoading } = useGetContactsQuery();

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.ContactsItems}>
      <div className={styles.title}>Contacts</div>
      <ContactItemsList contacts={data?.resources || []} />
    </div>
  );
};
