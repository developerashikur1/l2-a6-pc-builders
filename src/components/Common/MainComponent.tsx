import React, { ReactElement } from "react";

const MainComponent = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <main className="max-w-screen-2xl my-24 px-2 md:px-8 xl:px-16 mx-auto">
      {children}
    </main>
  );
};

export default MainComponent;
