import React, {createContext, ReactNode, useContext, useState} from 'react';

type HeaderProviderProps = {
  children: ReactNode
}

type HeaderContext = {
  open: boolean
  setOpen: (v: boolean) => void
}

const HeaderContext = createContext({} as HeaderContext);


export function useHeader() {
  return useContext(HeaderContext);
}

export function HeaderProvider({children}: HeaderProviderProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <HeaderContext.Provider value={{open, setOpen}}>
      {children}
    </HeaderContext.Provider>
  );
}