import { Route, Routes } from "react-router-dom";

import { CardsComponents } from "../pages/cards-components";
import { DescriptionTemplete } from "../design-system/data/Avatar/examples";
/* const tabs = [
  {
    id: "Example",
    label: "Example",
    isDisabled: false,
  },
  {
    id: "Code",
    label: "Code",
    isDisabled: false,
  },
];
 */
export const InformationComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CardsComponents />} />
      <Route path="avatar" element={<DescriptionTemplete />}></Route>
    </Routes>
  );
};
