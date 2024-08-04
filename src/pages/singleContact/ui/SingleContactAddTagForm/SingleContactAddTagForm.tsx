// react
import { ChangeEvent, FC, useState } from "react";
// enteties
import { IContact, useUpdateContactTags } from "@/enteties/contact";
// ui
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
// styles
import styles from "./SingleContactAddTagForm.module.scss";

interface SingleContactAddTagFormProps {
  id: IContact["id"];
  oldTags: IContact["tags"];
}

export const SingleContactAddTagForm: FC<SingleContactAddTagFormProps> = ({
  id,
  oldTags,
}) => {
  const { updateContactTags, isLoading } = useUpdateContactTags();

  const [text, setText] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onAddTagButtonClick = () => {
    if (!isLoading) {
      updateContactTags({
        id: id,
        oldTags: oldTags,
        newTags: [...text.split(",")],
      });

      setText("");
    }
  };

  return (
    <div className={styles.SingleContactAddTagForm}>
      <Input
        value={text}
        onChange={onChange}
        placeholder="Add new tag"
        type="text"
      />
      <Button onClick={onAddTagButtonClick}> Add Tag </Button>
    </div>
  );
};
