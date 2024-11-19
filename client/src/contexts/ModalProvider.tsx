import { createContext, useContext, useState } from 'react';
import { ModalContextType } from '../types/types';

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = (): ModalContextType => {
  return useContext(ModalContext);
};
