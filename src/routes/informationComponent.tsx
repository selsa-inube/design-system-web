import { Route, Routes } from "react-router-dom";

import { CardsComponents } from "../components/feedback/cards-components";
import { PageAvatar } from "../pages/components/avatar";
import { PageIcon } from "../pages/components/icon";
import { PageButton } from "../pages/components/Button";
import { PageLabel } from "../pages/components/Label";
import { PageSwitch } from "../pages/components/Switch";

export const InformationComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CardsComponents />} />
      <Route path="avatar" element={<PageAvatar />} />
      <Route path="icon" element={<PageIcon />} />
      <Route path="button" element={<PageButton />} />
      <Route path="label" element={<PageLabel />} />
      <Route path="switch" element={<PageSwitch />} />
    </Routes>
  );
};
