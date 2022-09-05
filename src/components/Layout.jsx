import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full">{children}</div>
    </div>
  );
};

export default Layout;
