import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { navbarType } from "../../types/types";
import { Modal, Stack, ModalAnchor, ModalHeader, CloseButton } from "./styles";
import useClickOutside from "../../hooks/useClickOutside";

export default function index({ handleMenu, setIsMenuOpen }: navbarType) {
  const menuRef = useClickOutside(() => {
    setIsMenuOpen(false);
  });

  return (
    <Modal ref={menuRef}>
      <ModalHeader>
        <CloseButton onClick={handleMenu}>
          <Icon
            path={mdiClose}
            title="Close"
            size={2}
            color="rgba(255, 255, 255, 0.95)"
          />
        </CloseButton>
      </ModalHeader>
      <Stack>
        <ModalAnchor onClick={handleMenu} href="/">
          Home
        </ModalAnchor>
        <ModalAnchor onClick={handleMenu} href="/about">
          About
        </ModalAnchor>
        <ModalAnchor onClick={handleMenu} href="/contact">
          Contact
        </ModalAnchor>
      </Stack>
    </Modal>
  );
}
