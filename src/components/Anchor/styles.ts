import styled from "styled-components";
import { navbarType } from "../../types/types";

export const Anchor = styled.a<navbarType>`
  cursor: pointer;
  transition: all 300ms ease-in-out;
  font-size: 1.1rem;
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }
`;
