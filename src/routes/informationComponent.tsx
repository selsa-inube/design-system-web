import { Route, Routes } from "react-router-dom";

import { CardsComponents } from "@components/feedback/cards-components";

import { PageAvatar } from "@pages/components/data/avatar";
import { PageIcon } from "@pages/components/data/icon";
import { PageButton } from "@pages/components/inputs/Button";
import { PageLabel } from "@pages/components/inputs/Label";
import { PageSwitch } from "@pages/components/inputs/Switch";
import { PageTextarea } from "@pages/components/inputs/Textarea";
import { PageTextfield } from "@pages/components/inputs/Textfield";
import { PageSelect } from "@pages/components/inputs/Select";

export const InformationComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CardsComponents />} />
      <Route path="avatar" element={<PageAvatar />} />
      <Route path="icon" element={<PageIcon />} />
      <Route path="button" element={<PageButton />} />
      <Route path="label" element={<PageLabel />} />
      <Route path="switch" element={<PageSwitch />} />
      <Route path="text-area" element={<PageTextarea />} />
      <Route path="text-field" element={<PageTextfield />} />
      <Route path="select" element={<PageSelect />} />
    </Routes>
  );
};
