import Logo from "../Logo";
import { navbarType } from "../../types/types";
import { Navbar, Container, Stack } from "./styles";
import Anchor from "../Anchor";
import useScrollPosition from "../../hooks/useScrollPosition";
import Menu from "../Menu";
import useWindowSize from "../../hooks/useWindowSize";

export default function index({ page }: navbarType) {
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();

  return (
    <Navbar
      style={
        scrollPosition > 5
          ? { background: "#0D0D0D" }
          : { color: "rgba(255, 255, 255, 0.95)" }
      }
      page={page}
    >
      <Container>
        <Logo />
        {width > 600 ? (
          <Stack>
            <Anchor page={page} anchor="Home" href="/" />
            <Anchor page={page} anchor="About" href="/about" />
            <Anchor page={page} anchor="Contact" href="/contact" />
          </Stack>
        ) : (
          <Menu page={page} />
        )}
      </Container>
    </Navbar>
  );
}
