import { createContext, ReactNode, useContext, useState } from "react";

interface ISidebarMenuContextData {
  open: boolean;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

interface ISidebarMenuProvider {
  children: ReactNode;
}

const SidebarMenuContext = createContext({} as ISidebarMenuContextData);

export function SidebarMenuProvider({ children }: ISidebarMenuProvider) {

  const startMenuClosedOnMobile = window.innerWidth >= 768;
  const [open, setOpen] = useState(startMenuClosedOnMobile);

  const handleOpenMenu = () => {
    setOpen(true);
  }

  const handleCloseMenu = () => {
    setOpen(false);
  }

  return (
    <SidebarMenuContext.Provider value={{ open, handleOpenMenu, handleCloseMenu }}>
      {children}
    </SidebarMenuContext.Provider>
  )
}


export const useSidebarMenu = () => useContext(SidebarMenuContext)
