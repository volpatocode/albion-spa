import styled from "styled-components";
import Icon from "@mdi/react";

export const Modal = styled.div`
  height: 100vh;
  width: 50vw;
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  background: #0d0d0d;
  padding: 0 3%;
  transition: 300ms ease-in-out;

  @media (max-width: 400px) {
    padding: 0 2%;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0;
`;

export const Stack = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
`;

export const ModalAnchor = styled.a`
  cursor: pointer;
  color:rgba(255, 255, 255, 0.95) !important;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.5px;
  padding: 0.5rem 0;
  width: 100%;
  transition: all 300ms ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;
