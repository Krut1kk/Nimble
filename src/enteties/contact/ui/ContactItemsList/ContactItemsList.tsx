// react
import { FC } from "react";
// ui
import { ContactItem } from "../ContactItem/ContactItem";
// types
import { IContact } from "../../model/types/contactTypes";
// styles
import styles from "./ContactItemsList.module.scss";

interface ContactItemsListProps {
  contacts: IContact[];
}

export const ContactItemsList: FC<ContactItemsListProps> = ({ contacts }) => {
  return (
    <div className={styles.ContactItemsList}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          tags={contact.tags}
          record_type={contact.record_type}
          privacy={contact.privacy}
          fields={contact.fields}
          owner_id={contact.owner_id}
          avatar_url={contact.avatar_url}
        />
      ))}
    </div>
  );
};
