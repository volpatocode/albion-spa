import styled from "styled-components";
import { colorSchemeType } from "../../types/types";

export const Navbar = styled.div`
  padding: 1rem 0;
  background: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
`;

export const Anchor = styled.a<colorSchemeType>`
  cursor: pointer;
  color: ${(props) =>
    props.anchor == "white"
      ? " rgba(255, 255, 255, 0.95)"
      : " rgba(0, 0, 0, 0.95)"};
  transition: 200ms ease-in-out;
  font-size: 1.1rem;
  font-weight: ${(props) => (props.anchor == "black" ? "bold" : "400")};

  :hover {
    color: ${(props) =>
      props.anchor == "white"
        ? " rgba(255, 255, 255, 0.95)"
        : " rgba(0, 0, 0, 0.95)"};
    text-shadow: ${(props) =>
      props.anchor == "white" ? "2px 2px 16px rgba(255, 255, 255, 0.95)" : ""};
    text-decoration: underline;
  }
`;
