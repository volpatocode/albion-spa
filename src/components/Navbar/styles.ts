import styled from "styled-components";
import { colorSchemeType } from "../../types/types";

export const Navbar = styled.div<Pick<colorSchemeType, "navbg">>`
  padding: 1rem 0;
  transition: all 300ms ease-in-out;
  background-color: ${(props) => {
    switch (props.navbg) {
      case "white":
        return "rgba(255, 255, 255, 0.95)";
      case "black":
        return "rgba(0, 0, 0, 0.95)";
    }
  }};
  position: sticky;
  top: 0;
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

export const Anchor = styled.a<Pick<colorSchemeType, "anchor">>`
  cursor: pointer;
  color: ${(props) => {
    switch (props.anchor) {
      case "white":
        return "rgba(255, 255, 255, 0.95)";
      case "black":
        return "rgba(0, 0, 0, 0.95)";
    }
  }};
  transition: all 300ms ease-in-out;
  font-size: 1.1rem;
  font-weight: bold;

  :hover {
    color: ${(props) => {
      switch (props.anchor) {
        case "white":
          return "rgba(255, 255, 255, 0.95)";
        case "black":
          return "rgba(0, 0, 0, 0.95)";
      }
    }};
    text-decoration: underline;
  }
`;
