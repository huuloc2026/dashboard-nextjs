"use client";
import React from "react";

const AppContext = React.createContext({
  accessToken: "",
  setAccessToken: (token: string) => {},
});

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default function AppProvider({
  children,
  initialAccessToken = "",
}: {
  children: React.ReactNode;
  initialAccessToken?: string;
}) {
  const [accessToken, setAccessToken] = React.useState(initialAccessToken);
  //   const value = React.useMemo(() => ({ accessToken }), [accessToken]);
  return (
    <AppContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AppContext.Provider>
  );
}
