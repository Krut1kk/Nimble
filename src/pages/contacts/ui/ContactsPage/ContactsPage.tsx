// react
import { FC } from "react";
// ui
import { ContactsItems } from "../ContactsItems/ContactsItems";
import { ContactAddForm } from "../ContactAddForm/ui/ContactAddForm/ContactAddForm";
// styles
import styles from "./ContactsPage.module.scss";

interface ContactsPageProps {}

export const ContactsPage: FC<ContactsPageProps> = ({}) => {
  return (
    <div className={styles.ContactsPage}>
      <ContactAddForm />
      <ContactsItems />
    </div>
  );
};
