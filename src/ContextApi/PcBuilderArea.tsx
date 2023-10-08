import React, { useState } from "react";
import { IPcBuilderData, PcBuilderProvider } from "./PcBuilderContext";

const PcBuilderArea = (props: { children: React.ReactNode }) => {
  const [pcBuildData, setPcBuildData] = useState<IPcBuilderData | {}>({});
  const updateState = (updatedState: IPcBuilderData | {}) => {
    setPcBuildData((prevState) => ({
      ...prevState,
      ...updatedState,
    }));
  };
  return (
    <PcBuilderProvider value={{ pcBuildData, updateState }}>
      {props.children}
    </PcBuilderProvider>
  );
};

export default PcBuilderArea;
