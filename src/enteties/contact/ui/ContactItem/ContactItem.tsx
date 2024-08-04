// react
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
// constants
import { getSingleContactRoute } from "@/shared/libs/constants/routes";
// assets
import DeleteIcon from "../../libs/assets/svg/deleteIcon.svg?react";
// types
import { IContact } from "../../model/types/contactTypes";
// styles
import styles from "./ContactItem.module.scss";
import { useDeleteContact } from "../../libs/constants/contactQueryHooks";

interface ContactItemProps extends IContact {}

export const ContactItem: FC<ContactItemProps> = ({
  id,
  avatar_url,
  fields,
  owner_id,
  privacy,
  record_type,
  tags,
}) => {
  const { pathname } = useLocation();

  const { deleteContactById } = useDeleteContact();

  const onDeleteContactClick = () => {
    deleteContactById(id);
  };

  const firstname = fields["first name"] && fields["first name"][0]?.value;

  const lastname = fields["last name"] && fields["last name"][0]?.value;

  const shoudRenderDeleteButton = pathname !== getSingleContactRoute(id);

  return (
    <div className={styles.ContactItem}>
      <div className={styles.content}>
        <div className={styles.topContainer}>
          <div className={styles.topContent}>
            <Link to={getSingleContactRoute(id)}>
              <img className={styles.avatar} src={avatar_url} alt="avatar" />
            </Link>
            <div className={styles.userInfo}>
              <div className={styles.text}>{firstname || ""}</div>
              <div className={styles.text}>{lastname}</div>
            </div>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomContent}>
            {tags.map((tag) => (
              <div key={tag.id} className={styles.tag}>
                {tag.tag}
              </div>
            ))}
          </div>
        </div>
        {shoudRenderDeleteButton && (
          <div className={styles.deleteIcon} onClick={onDeleteContactClick}>
            <DeleteIcon />
          </div>
        )}
      </div>
    </div>
  );
};
