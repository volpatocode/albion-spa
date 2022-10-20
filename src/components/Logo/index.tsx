import { colorSchemeType } from "../../types/types";
import { Logo } from "./styles";

export default function index({ logo }: colorSchemeType) {
  return (
    <Logo logo={logo} href="/">
      lupus
    </Logo>
  );
}
