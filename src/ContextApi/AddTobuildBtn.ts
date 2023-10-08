import { createContext, useContext } from "react";

type BtnContext = {
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddToBuildBtnContext = createContext<BtnContext | null>(null);
export const AddToBuildBtnProvider = AddToBuildBtnContext.Provider;

export const useAddToBuildBtnContext = () => useContext(AddToBuildBtnContext);
