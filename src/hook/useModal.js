import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [ modalShowFlag, setModalShowFlag ] = useState(false);
  const showModal = () => {
    setModalShowFlag(true);
  };
  const closeModal = () => {
    setModalShowFlag(false);
  };
  const value = { modalShowFlag, showModal, closeModal };
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

// カスタムフック
export const useModalContext = () => {
  return useContext(ModalContext);
};
