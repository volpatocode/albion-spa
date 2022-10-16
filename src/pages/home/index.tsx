import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

import {
  PageWrapper,
  Content,
  Info,
  Row,
  Title,
  Legend,
  Subtitle,
  Typography,
  Divider,
  Price,
  BoxButtons, 
  Button,
} from "./styles";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <Content>
        <Carousel />
        <Info>
          <Row>
            <Title> Chanel Nº5</Title>
            <Legend>447 reviews</Legend>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Divider />
          </Row>
          <Row>
            <Subtitle>Bottle Size:</Subtitle>
            <Typography>Large</Typography>
            <Divider />
          </Row>
          <Row>
            <Subtitle>Perfume Type:</Subtitle>
            <Typography>Nº5</Typography>
            <Divider />
            <Price>$199.ºº</Price>
            <BoxButtons>
              <Button variant="outlined">Wishlist</Button>
              <Button variant="contained">Add to Cart</Button>
            </BoxButtons>
          </Row>
        </Info>
      </Content>
      <Footer />
    </PageWrapper>
  );
}
