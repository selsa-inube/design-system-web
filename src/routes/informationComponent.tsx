import { Route, Routes } from "react-router-dom";

import { components } from "../content";
import { DynamicComponent } from "@pages/Components/DynamicComponent";
import { Cards } from "@components/feedback/cards-components";
import { cardsData } from "../data/cards";

const InformationComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards cards={cardsData} />} />
      {Object.entries(components).map(([key]) => (
        <Route key={key} path={key} element={<DynamicComponent />} />
      ))}
    </Routes>
  );
};

export { InformationComponentRoutes };
