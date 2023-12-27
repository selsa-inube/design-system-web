import { Route, Routes } from "react-router-dom";

import { CardsComponents } from "../components/feedback/cards-components";
import { PageAvatar } from "../pages/components/avatar";
import { PageIcon } from "../pages/components/icon";

export const InformationComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CardsComponents />} />
      <Route path="avatar" element={<PageAvatar />} />
      <Route path="icon" element={<PageIcon />} />
    </Routes>
  );
};
