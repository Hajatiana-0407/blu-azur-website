import React, { createContext, useContext, useState, type ReactNode } from "react";

type AppContextType = {
  activeOnglet: string;
  setActiveOnglet: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);
type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [activeOnglet, setActiveOnglet] = useState<string>("about");


  return (
    <AppContext.Provider
      value={{
        activeOnglet,
        setActiveOnglet
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
