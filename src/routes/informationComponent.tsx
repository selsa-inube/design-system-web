import { Route, Routes } from "react-router-dom";

import { CardsComponents } from "@components/feedback/cards-components";
import { components } from "../content";
import { Component } from "@pages/Component";

const InformationComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CardsComponents />} />
      {Object.entries(components).map(([key]) => (
        <Route key={key} path={key} element={<Component />} />
      ))}
    </Routes>
  );
};

export { InformationComponentRoutes };
