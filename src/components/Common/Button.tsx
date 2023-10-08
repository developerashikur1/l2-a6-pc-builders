import React from "react";

const Button = ({
  children,
  addClass,
  handler,
}: {
  children: React.ReactNode;
  addClass?: string;
  handler?: () => void;
}) => {
  return (
    <button
      onClick={handler}
      className={
        "text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default Button;
