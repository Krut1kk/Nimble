// react
import { useEffect } from "react";
// libs
import toast from "react-hot-toast";
// api
import {
  useDeleteContactMutation,
  usePostContactMutation,
  useUpdateContactTagsMutation,
} from "../../api/contactAPI";
// types
import { IContact } from "../../model/types/contactTypes";

export const useUpdateContactTags = () => {
  const [updateTags, result] = useUpdateContactTagsMutation();

  useEffect(() => {
    if (result.error) {
      toast.error("Invalid Format , please use comma separated values");
    }

    if (result.isSuccess) {
      toast.success("Tags updated successfully");
    }
  }, [result.error, result.isSuccess]);

  const updateContactTags = (info: {
    id: IContact["id"];
    oldTags: IContact["tags"];
    newTags: string[];
  }) => {
    const refactoredOldTags = info.oldTags.map((tag) => tag.tag);

    const updatedTags = [...refactoredOldTags, ...info.newTags];

    updateTags({ id: info.id, tags: updatedTags });
  };

  return {
    updateContactTags,
    ...result,
  };
};

export const useDeleteContact = () => {
  const [deleteContact, result] = useDeleteContactMutation();

  useEffect(() => {
    if (result.error) {
      toast.error("Something went wrong, please try again later");
    }

    if (result.isSuccess) {
      toast.success("Contact deleted successfully");
    }
  }, [result.isSuccess, result.error]);

  const deleteContactById = (id: IContact["id"]) => {
    deleteContact(id);
  };
  return {
    deleteContactById,
    ...result,
  };
};

export const useAddContact = () => {
  const [addContactHandler, result] = usePostContactMutation();

  useEffect(() => {
    if (result.error) {
      toast.error("Something went wrong, please try again later");
    }

    if (result.isSuccess) {
      toast.success("Contact created successfully");
    }
  }, [result.isSuccess, result.error]);

  const addContact = (contact: {
    email: string;
    "first name": string;
    "last name": string;
  }) => {
    const contactFieldsData = Object.entries(contact).reduce(
      (acc, [key, value]) => {
        // @ts-expect-error
        acc[key] = [
          {
            label: key,
            modifier: "",
            value: value,
            is_primary: false,
          },
        ];

        return acc;
      },
      {}
    ) as IContact["fields"];

    addContactHandler({
      record_type: "person",
      fields: contactFieldsData,
    });
  };

  return {
    addContact,
    ...result,
  };
};
