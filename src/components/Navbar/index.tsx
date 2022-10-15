import Logo from "../Logo";
import { Navbar, Container, Stack, Anchor } from "./styles";

export default function index() {
  return (
    <Navbar>
      <Container>
        <Logo />
        <Stack>
          <Anchor>Home</Anchor>
          <Anchor>About</Anchor>
          <Anchor>Catalogue</Anchor>
          <Anchor>Contact</Anchor>
        </Stack>
      </Container>
    </Navbar>
  );
}
