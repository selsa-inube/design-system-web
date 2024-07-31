# Design Proposal for Flag Component Enhancement

## Objective :dart:

The goal is to simplify the use of the Flag component for developers by allowing them to render messages without manually adding the component to each screen. This improvement aims to streamline the process and provide a more efficient way of displaying important information to end users.

## Current Situation :chart_with_downwards_trend:

Currently, developers need to manually import and add the Flag component to the return method of their screens to display messages. This process is repetitive and can be cumbersome, especially when the same component is needed across multiple screens.

## Proposed Improvement :chart_with_upwards_trend:

The improvement involves creating a centralized way to render Flag components through portals, controlled higher in the app structure, such as in the main.tsx or app.tsx files. This will allow nested pages to use a context or hook to display messages without needing to manage the rendering directly.

### Key Features :key:

1. **Centralized Control**: The control of the portal rendering Flag components will be centralized at a higher level in the app structure.
2. **Context/Hook**: A context and/or hook will be provided for nested pages to trigger messages.
3. **Stack Display**: The system will handle multiple messages gracefully in a stack display, similar to the image provided.

## Sequence Diagram :triangular_ruler:

To illustrate how the component will work in an app, a sequence diagram will be shown. This diagram will depict the process of importing, executing, and rendering the message.

![image](https://github.com/selsa-inube/design-system-web/assets/45011420/50ee5cea-318e-43a6-93d2-5b863a9824fe)

## Implementation :nut_and_bolt:

:one: We are going to create a flagContext and a provider that will manage the state and rendering of messages.
``` typescript
import { createContext, useState, ReactNode } from "react";
import { FlagMessage, FlagPortal } from "../components/FlagPortal/index";

interface FlagContextType {
  addMessage: (message: Omit<FlagMessage, "id">) => void;
}

const FlagContext = createContext<FlagContextType | undefined>(undefined);

let idCounter = 0;

export const FlagProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<FlagMessage[]>([]);

  const addMessage = (message: Omit<FlagMessage, "id">) => {
    const id = ++idCounter;
    setMessages([...messages, { ...message, id }]);
    setTimeout(() => removeMessage(id), message.duration);
  };

  const removeMessage = (id: number) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  };

  return (
    <FlagContext.Provider value={{ addMessage }}>
      {children}
      <FlagPortal messages={messages} removeMessage={removeMessage} />
    </FlagContext.Provider>
  );
};

export { FlagContext };
```

:two: Develop a hook, **useFlag**, that components can use to dispatch messages to the context
``` typescript
import { useContext } from "react";
import { FlagContext } from "../context/FlagContext";

export const useFlag = () => {
  const context = useContext(FlagContext);
  if (context === undefined) {
    throw new Error("useFlag must be used within a FlagProvider");
  }
  return context;
};
```

:three: Now we need to implement a stack display mechanism within the context provider to handle multiple messages.
``` typescript
import { Flag, IFlagAppearance } from "@inubekit/flag";
import ReactDOM from "react-dom";
import { StyledContainer } from "./styles";

interface FlagMessage {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  appearance: IFlagAppearance;
  duration: number;
  closeFlag: () => void;
}

interface FlagPortalProps {
  messages: FlagMessage[];
  removeMessage: (id: number) => void;
}

const FlagPortal = ({ messages, removeMessage }: FlagPortalProps) => {
  return ReactDOM.createPortal(
    <StyledContainer>
      {messages.map((msg) => (
        <Flag
          key={msg.id}
          icon={msg.icon}
          title={msg.title}
          description={msg.description}
          appearance={msg.appearance}
          duration={msg.duration}
          closeFlag={() => removeMessage(msg.id)}
          isMessageResponsive={false}
        />
      ))}
    </StyledContainer>,
    document.body
  );
};

export { FlagPortal };
export type { FlagMessage };
```

:four: Last but not least set up a portal to render the messages from the context provider
``` typescript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FlagProvider } from "./context/FlagContext";

ReactDOM.render(
  <FlagProvider>
    <App />
  </FlagProvider>,
  document.getElementById("root")
);
```

## Example :trophy:
[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/20240705-flag-component-enhancement-yd5gwy?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clz98jnn900062v6i6ymgo8r9%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clz98jnn900022v6iy2vr8etf%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clz98jnn900032v6itir3k16r%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clz98jnn900052v6ibxu826s8%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clz98jnn900022v6iy2vr8etf%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clz98jnn800012v6il3ww8boc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%257D%255D%252C%2522id%2522%253A%2522clz98jnn900022v6iy2vr8etf%2522%252C%2522activeTabId%2522%253A%2522clz98jnn800012v6il3ww8boc%2522%257D%252C%2522clz98jnn900052v6ibxu826s8%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clz98jnn900042v6iwb7nw78m%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clz98jnn900052v6ibxu826s8%2522%252C%2522activeTabId%2522%253A%2522clz98jnn900042v6iwb7nw78m%2522%257D%252C%2522clz98jnn900032v6itir3k16r%2522%253A%257B%2522tabs%2522%253A%255D%252C%2522id%2522%253A%2522clz98jnn900032v6itir3k16r%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

You can view the live code example by clicking the image above.
