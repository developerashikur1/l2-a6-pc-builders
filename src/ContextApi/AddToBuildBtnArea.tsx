import { categoriesRouteData } from "@/components/Shared/Navbar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AddToBuildBtnProvider } from "./AddTobuildBtn";

const BtnArea = (props: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const [isShowing, setIsShowing] = useState(Boolean);

  useEffect(() => {
    const linkArray = categoriesRouteData.map((p) => `/category/${p.link}`);
    if (!linkArray.includes(pathName)) {
      setIsShowing(false);
    }
  }, [pathName]);
  return (
    <AddToBuildBtnProvider value={{ isShowing, setIsShowing }}>
      {props.children}
    </AddToBuildBtnProvider>
  );
};

export default BtnArea;
