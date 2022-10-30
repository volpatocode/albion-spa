import styled from "styled-components";
import { navbarType } from "../../types/types";

export const Menu = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: .5rem 0 .5rem .5rem;
`;

export const MenuContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const MenuLine = styled.div<Pick<navbarType, "page">>`
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0D0D0D;
  transition: all 300ms ease-in-out;
`;


