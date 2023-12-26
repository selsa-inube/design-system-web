import { Route, Routes } from "react-router-dom";

import { CardsComponents } from "../components/feedback/cards-components";
import { PageAvatar } from "../pages/components/avatar";

export const InformationComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CardsComponents />} />
      <Route path="avatar" element={<PageAvatar />}></Route>
    </Routes>
  );
};
