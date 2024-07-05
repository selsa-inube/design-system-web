# Design Proposal for Flag Component Enhancement

## Objective

The goal is to simplify the use of the Flag component for developers by allowing them to render messages without manually adding the component to each screen. This improvement aims to streamline the process and provide a more efficient way of displaying important information to end users.

## Current Situation

Currently, developers need to manually import and add the Flag component to the return method of their screens to display messages. This process is repetitive and can be cumbersome, especially when the same component is needed across multiple screens.

## Proposed Improvement

The improvement involves creating a centralized way to render Flag components through portals, controlled higher in the app structure, such as in the main.tsx or app.tsx files. This will allow nested pages to use a context or hook to display messages without needing to manage the rendering directly.

### Key Features:

1. **Centralized Control**: The control of the portal rendering Flag components will be centralized at a higher level in the app structure.
2. **Context/Hook**: A context and/or hook will be provided for nested pages to trigger messages.
3. **Stack Display**: The system will handle multiple messages gracefully in a stack display, similar to the image provided.

## Sequence Diagram

To illustrate how the component will work in an app, a sequence diagram will be shown. This diagram will depict the process of importing, executing, and rendering the message.

![image](https://github.com/selsa-inube/design-system-web/assets/45011420/50ee5cea-318e-43a6-93d2-5b863a9824fe)

## Implementation
1. We are going to create a flagContext and a provider that will manage the state and rendering of messages.
![carbon](https://github.com/selsa-inube/design-system-web/assets/45011420/1862208d-4ff7-4e42-bc7b-22ee7de9c969)

2. Develop a hook, **useFlag**, that components can use to dispatch messages to the context
![carbon (1)](https://github.com/selsa-inube/design-system-web/assets/45011420/1953a04c-8ea7-4810-b166-8b7a74a83e39)

3. Now we need to implement a stack display mechanism within the context provider to handle multiple messages.
![carbon (3)](https://github.com/selsa-inube/design-system-web/assets/45011420/7a378eee-08d2-402b-b740-1b47a33a8767)

4. Last but not least set up a portal to render the messages from the context provider
![carbon (2)](https://github.com/selsa-inube/design-system-web/assets/45011420/82feaef8-0a9a-4cd5-ae76-ae1a65c82b5a)





