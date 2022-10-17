import styled from "styled-components";
import { colorSchemeType } from "../../types/types";

export const Logo = styled.a<colorSchemeType>`
  cursor: pointer;
  color: ${(props) => {
    switch (props.logo) {
      case "white":
        return "rgba(255, 255, 255, 0.95)";
      case "black":
        return "rgba(0, 0, 0, 0.95)";
      case "transparent":
        return "transparent";
      default:
        "transparent";
    }
  }};

  font-size: 2rem;
  font-family: "Fuzzy Bubbles", cursive;
`;
