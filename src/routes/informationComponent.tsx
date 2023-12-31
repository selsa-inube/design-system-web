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
import { PageTable } from "@pages/components/data/Table";
import { PageTag } from "@pages/components/data/Tag";
import { PageUser } from "@pages/components/data/User";
import { PageAssisted } from "@pages/components/feedback/Assisted";
import { PageCountdownBar } from "@pages/components/feedback/CountdownBar";
import { PageSpinner } from "@pages/components/feedback/Spinner";
import { PageSectionMessage } from "@pages/components/feedback/SectionMessage";
import { PageSkeletonIcon } from "@pages/components/feedback/SkeletonIcon";
import { PageSkeletonLine } from "@pages/components/feedback/SkeletonLine";
import { PageBreadcrumbs } from "@pages/components/navigation/Breadcrumbs";
import { PageFullscreenNav } from "@pages/components/navigation/FullscreenNav";
import { PageHeader } from "@pages/components/navigation/Header";
import { PageNav } from "@pages/components/navigation/Nav";
import { PageTabs } from "@pages/components/navigation/Tabs";
import { PageBlankent } from "@pages/components/utils/Blanket";
import { PageText } from "@pages/components/data/Text";

export const InformationComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CardsComponents />} />
      <Route path="avatar" element={<PageAvatar />} />
      <Route path="icon" element={<PageIcon />} />
      <Route path="tag" element={<PageTag />} />
      <Route path="text" element={<PageText />} />
      <Route path="table" element={<PageTable />} />
      <Route path="user" element={<PageUser />} />
      <Route path="assisted" element={<PageAssisted />} />
      <Route path="countdown-bar" element={<PageCountdownBar />} />
      <Route path="section-message" element={<PageSectionMessage />} />
      <Route path="skeleton-icon" element={<PageSkeletonIcon />} />
      <Route path="skeleton-line" element={<PageSkeletonLine />} />
      <Route path="spinner" element={<PageSpinner />} />
      <Route path="button" element={<PageButton />} />
      <Route path="label" element={<PageLabel />} />
      <Route path="select" element={<PageSelect />} />
      <Route path="switch" element={<PageSwitch />} />
      <Route path="text-area" element={<PageTextarea />} />
      <Route path="text-field" element={<PageTextfield />} />
      <Route path="Breadcrumbs" element={<PageBreadcrumbs />} />
      <Route path="fullscreen-nav" element={<PageFullscreenNav />} />
      <Route path="header" element={<PageHeader />} />
      <Route path="nav" element={<PageNav />} />
      <Route path="tabs" element={<PageTabs />} />
      <Route path="blanket" element={<PageBlankent />} />
    </Routes>
  );
};
