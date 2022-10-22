import styled from "styled-components";
import { navbarType } from "../../types/types";

export const Anchor = styled.a<navbarType>`
  cursor: pointer;
  color: ${(props) =>
    props.page == "home" ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)"};
  transition: all 300ms ease-in-out;
  font-size: 1.1rem;
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }
`;
