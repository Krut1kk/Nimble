// react
import { FC } from "react";
import { useParams } from "react-router-dom";
// enteties
import { ContactItem, useGetContactByidQuery } from "@/enteties/contact";
// ui
import { SingleContactAddTagForm } from "../SingleContactAddTagForm/SingleContactAddTagForm";
// styles
import styles from "./SingleContactPage.module.scss";

interface SingleContactPageProps {}

export const SingleContactPage: FC<SingleContactPageProps> = ({}) => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, error } = useGetContactByidQuery(id!, {
    skip: !id,
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.resources[0],
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    console.log(error);
    return <div>Something went wrong!</div>;
  }

  return (
    <div className={styles.SingleContactPage}>
      <ContactItem {...data} />
      <SingleContactAddTagForm id={data.id} oldTags={data.tags} />
    </div>
  );
};
