import { Route, Routes } from "react-router-dom";

import { CardsComponents } from "@components/feedback/cards-components";
import { components } from "../content";
import { DynamicComponent } from "@pages/Components/DynamicComponent";

const InformationComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CardsComponents />} />
      {Object.entries(components).map(([key]) => (
        <Route key={key} path={key} element={<DynamicComponent />} />
      ))}
    </Routes>
  );
};

export { InformationComponentRoutes };
