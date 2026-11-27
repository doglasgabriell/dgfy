import { createContext, useState } from "react";

export const ExpandedContext = createContext();

export const ExpandedProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <ExpandedContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </ExpandedContext.Provider>
  );
};
