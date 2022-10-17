import Logo from "../Logo";
import { colorSchemeType } from "../../types/types";
import { Navbar, Container, Stack, Anchor } from "./styles";

export default function index({ anchor, logo }: colorSchemeType) {
  return (
    <Navbar>
      <Container>
        <Logo logo={logo} />
        <Stack>
          <Anchor anchor={anchor}>Home</Anchor>
          <Anchor anchor={anchor}>About</Anchor>
          <Anchor anchor={anchor}>Catalogue</Anchor>
          <Anchor anchor={anchor}>Contact</Anchor>
        </Stack>
      </Container>
    </Navbar>
  );
}
