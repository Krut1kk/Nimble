// react
import { FC, ChangeEvent, useState } from "react";
// enteties
import { useAddContact } from "@/enteties/contact";
// utils
import { validateEmail } from "@/shared/libs/utils/validateEmail";
// ui
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
// styles
import styles from "./ContactAddForm.module.scss";

interface ContactAddFormProps {}

const userDataInitialState = {
  email: {
    placeholder: "Enter an Email",
    value: "",
    type: "email",
  },

  "first name": {
    placeholder: "Enter a First Name",
    value: "",
    type: "text",
  },

  "last name": {
    placeholder: "Enter a Last Name",
    value: "",
    type: "text",
  },
};

export const ContactAddForm: FC<ContactAddFormProps> = ({}) => {
  const { addContact } = useAddContact();

  const [userData, setUserData] = useState(userDataInitialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setUserData({
      ...userData,
      [key]: {
        // @ts-expect-error
        ...userData[key],
        value: e.target.value,
      },
    });
  };

  const isAddButtonDisabled =
    !validateEmail(userData.email.value) ||
    (userData["first name"].value.length <= 2 &&
      userData["last name"].value.length <= 2);

  const onAddContactButtonClick = () => {
    addContact({
      email: userData.email.value,
      "first name": userData["first name"].value,
      "last name": userData["last name"].value,
    });

    setUserData(userDataInitialState);
  };

  return (
    <div className={styles.ContactAddForm}>
      <div className={styles.title}>Create Contact</div>
      <div className={styles.case}>
        {Object.entries(userData).map(([key, value]) => {
          return (
            <Input
              key={key}
              value={value.value}
              type={value.type}
              onChange={(e) => onChange(e, key)}
              placeholder={value.placeholder}
            />
          );
        })}
      </div>
      <Button onClick={onAddContactButtonClick} disabled={isAddButtonDisabled}>
        Add Contact
      </Button>
    </div>
  );
};
