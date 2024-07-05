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
![carbon](https://github.com/selsa-inube/design-system-web/assets/45011420/1862208d-4ff7-4e42-bc7b-22ee7de9c969)

:two: Develop a hook, **useFlag**, that components can use to dispatch messages to the context
![carbon (1)](https://github.com/selsa-inube/design-system-web/assets/45011420/1953a04c-8ea7-4810-b166-8b7a74a83e39)

:three: Now we need to implement a stack display mechanism within the context provider to handle multiple messages.
![carbon (3)](https://github.com/selsa-inube/design-system-web/assets/45011420/7a378eee-08d2-402b-b740-1b47a33a8767)

:four: Last but not least set up a portal to render the messages from the context provider
![carbon (2)](https://github.com/selsa-inube/design-system-web/assets/45011420/82feaef8-0a9a-4cd5-ae76-ae1a65c82b5a)

## Example :trophy:
:point_right: ![Example]([https://github.com/selsa-inube/design-system-web/assets/45011420/82feaef8-0a9a-4cd5-ae76-ae1a65c82b5a](https://codesandbox.io/p/sandbox/20240705-flag-component-enhancement-yd5gwy?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cly9551fu00062v6ki3q7ue55%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cly9551ft00022v6kekj2g4sm%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cly9551ft00032v6ki1tlfk3f%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cly9551fu00052v6kdl8ow0hy%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cly9551ft00022v6kekj2g4sm%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cly9551ft00012v6kxhxpefvy%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522cly95nwua00022v6k6uoj2d9e%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A15%252C%2522startColumn%2522%253A26%252C%2522endLineNumber%2522%253A15%252C%2522endColumn%2522%253A26%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522cly981ohg00022v6k271wx81x%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A4%252C%2522startColumn%2522%253A28%252C%2522endLineNumber%2522%253A4%252C%2522endColumn%2522%253A28%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Fcontext%252FFlagContext.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522cly9551ft00022v6kekj2g4sm%2522%252C%2522activeTabId%2522%253A%2522cly95nwua00022v6k6uoj2d9e%2522%257D%252C%2522cly9551fu00052v6kdl8ow0hy%2522%253A%257B%2522id%2522%253A%2522cly9551fu00052v6kdl8ow0hy%2522%252C%2522activeTabId%2522%253A%2522cly9888pd00392v6k6ld08eiu%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cly9551ft00042v6kokqx56d5%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522DOCS%2522%252C%2522path%2522%253A%2522%252Feditors%252Fweb%252Fvscode-web%2522%252C%2522id%2522%253A%2522cly985ui0000a2v6kfbt35h2u%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522cly9866s000142v6knyaz2j2y%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522cly9888pd00392v6k6ld08eiu%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522cly9551ft00032v6ki1tlfk3f%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522cly9551ft00032v6ki1tlfk3f%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D))
