import styled from "styled-components";
import { colorSchemeType } from "../../types/types";

export const Logo = styled.a<Pick<colorSchemeType, "logo">>`
  cursor: pointer;
  transition: all 300ms ease-in-out;
  color: ${(props) => {
    switch (props.logo) {
      case "white":
        return "rgba(255, 255, 255, 0.95)";
      case "black":
        return "rgba(0, 0, 0, 0.95)";
    }
  }};

  font-size: 2rem;
  font-family: "Fuzzy Bubbles", cursive;
`;
