export interface IContactField {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}

export interface ITag {
  id: string;
  tag: string;
}

export interface IContact {
  id: string;
  avatar_url: string;
  record_type: "person" | "company";
  tags: ITag[];
  privacy: {
    edit: null;
    read: null;
  };
  owner_id: null;
  fields: {
    email: [IContactField];
    "first name": [IContactField];
    "last name": [IContactField];
  };
}
