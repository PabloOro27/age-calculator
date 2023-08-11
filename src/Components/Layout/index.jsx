import React from "react";

const Layout = ({ children }) => {
  return <div className="flex flex-col items-center justify-center bg-slate-400 w-screen h-screen">{children}</div>;
};

export default Layout;
