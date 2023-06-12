import React from "react";

const Main = ({ children }) => {
  return (
    <main className="md:ml-64 bg-white">
      <div className="px-4 md:px-10 mx-auto w-full">{children}</div>
    </main>
  );
};

export default Main;
