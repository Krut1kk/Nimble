// react
import { Route, Routes } from "react-router-dom";
// pages
import { ContactsPage } from "@/pages/contacts";
import { SingleContactPage } from "@/pages/singleContact";
// routes
import {
  getContactsRoute,
  getSingleContactRoute,
} from "@/shared/libs/constants/routes";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={getContactsRoute()} element={<ContactsPage />} />
        <Route
          path={getSingleContactRoute(":id")}
          element={<SingleContactPage />}
        />
      </Routes>
    </div>
  );
};
