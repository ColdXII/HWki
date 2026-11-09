"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Build } from "@/data/types";

// Holds the visitor's custom build, so the Build tab and the Stats tab share it
type Ctx = { custom: Build | null; setCustom: (b: Build | null) => void };
const CustomBuildContext = createContext<Ctx>({
  custom: null,
  setCustom: () => {},
});

export function CustomBuildProvider({ children }: { children: ReactNode }) {
  const [custom, setCustom] = useState<Build | null>(null);
  return (
    <CustomBuildContext.Provider value={{ custom, setCustom }}>
      {children}
    </CustomBuildContext.Provider>
  );
}

export const useCustomBuild = () => useContext(CustomBuildContext);
