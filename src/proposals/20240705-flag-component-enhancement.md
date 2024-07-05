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
