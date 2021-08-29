import React from "react";
import DefaultNavigation from "../components/default.nav";

const DefaultAppShell = ({ children }) => {
  return (
    <>
      <DefaultNavigation />
      {children}
    </>
  );
};

export default DefaultAppShell;