import Logo from "../Logo";
import {
  Wrapper,
  Footer,
  Title,
  TitleBox,
  Row,
  Typography,
  AnchorList,
  Anchor,
  ListTitle,
  Divider,
  Copyright,
} from "./styles";

export default function index() {
  return (
    <Wrapper>
      <Footer>
        <Row style={{ justifyContent: "space-between" }}>
          <TitleBox>
            <Title style={{ marginRight: "2rem" }}>Let's work</Title>
            <Title style={{ alignSelf: "flex-end" }}>together</Title>
          </TitleBox>
          <Typography style={{marginTop: "3rem"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aperiam, odio impedit est maxime aliquam quis
            repudiandae nemo, maiores alias neque molestiae magni voluptatem
            illum qui, possimus tempore numquam fugit.
          </Typography>
        </Row>
        <Row>
          <Logo />
          <AnchorList>
            <ListTitle>Adress</ListTitle>
            <Anchor>744 2th Street, 14st Floor, New York, USA</Anchor>
          </AnchorList>
          <AnchorList>
            <ListTitle>Call us on</ListTitle>
            <Anchor>+1442 4214 2137</Anchor>
            <Anchor>+1002 9405 0141</Anchor>
            <Anchor>volpatocode@gmail.com</Anchor>
          </AnchorList>
          <AnchorList>
            <ListTitle>Our Polices</ListTitle>
            <Anchor>Privacy Policy</Anchor>
            <Anchor>Terms of Use</Anchor>
            <Anchor>Refund Policy</Anchor>
          </AnchorList>
        </Row>
      </Footer>
      <Divider />
      <Copyright>Copyright &copy; lupus2022. All Right Reserves</Copyright>
    </Wrapper>
  );
}
