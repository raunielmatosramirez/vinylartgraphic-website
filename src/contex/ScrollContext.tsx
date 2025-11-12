// contex/ScrollContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";
interface ScrollContextType {
  isAtTop: boolean;
}
const ScrollContext = createContext<ScrollContextType>({
  isAtTop: true,
});

export const useScroll = () => {
  return useContext(ScrollContext);
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [isAtTop, setIsAtTop] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isHome = pathname === "/";
    if (!isHome) {
      setIsAtTop(true);
      return;
    }
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 5);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
  return (
    <ScrollContext.Provider value={{ isAtTop }}>
      {children}
    </ScrollContext.Provider>
  );
};
