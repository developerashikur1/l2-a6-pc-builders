import { Icon } from "@/components/Common";
import React from "react";

const SocialIcons = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-2 bg-white-500 hover:bg-gray-200 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
      {children}
    </div>
  );
};

export default SocialIcons;
