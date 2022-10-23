import Logo from "../Logo";
import { navbarType } from "../../types/types";
import { Navbar, Container, Stack } from "./styles";
import Anchor from "../Anchor";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function index({ page, color }: navbarType) {
  const scrollPosition = useScrollPosition();

  return (
    <Navbar
      style={scrollPosition > 5 ? { background: "black" } : { color: "white" }}
      page={page}
      color="white"
    >
      <Container>
        <Logo />
        <Stack>
          <Anchor page={page} anchor="Home" />
          <Anchor page={page} anchor="About" />
          <Anchor page={page} anchor="Contact" />
        </Stack>
      </Container>
    </Navbar>
  );
}
