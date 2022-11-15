import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { products } from "../../data/data";

import {
  PageWrapper,
  MainView,
  Content,
  Info,
  Row,
  Details,
  Title,
  Legend,
  Subtitle,
  Typography,
  Divider,
  Price,
  BoxButtons,
  Button,
  Image,
} from "./styles";
import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();

  return (
    <PageWrapper>
      <MainView>
        <Navbar page="product" />
        {products.map((product) => {
          return (
            product.id == productId && (
              <Content key={product?.id}>
                <Image src={`/${product.id}.png`} />
                <Info>
                  <Row>
                    <Title> {product?.name}</Title>
                    <Legend>{product?.reviews} reviews</Legend>
                    <Typography>{product?.description}</Typography>
                    <Divider />
                  </Row>
                  <Row>
                    <Subtitle>Bottle Size:</Subtitle>
                    <Typography>{product?.size}</Typography>
                    <Divider />
                  </Row>
                  <Row>
                    <Subtitle>Perfume Type:</Subtitle>
                    <Typography>{product?.type}</Typography>
                    <Divider />
                    <Price>${product?.price}</Price>
                    <BoxButtons>
                      <Button variant="outlined">Wishlist</Button>
                      <Button variant="contained">Add to Cart</Button>
                    </BoxButtons>
                  </Row>
                  <Details>
                    <Row>
                      <Subtitle>Product Detail:</Subtitle>
                      <Typography align="justify">
                        {product?.details}
                      </Typography>
                    </Row>
                  </Details>
                </Info>
              </Content>
            )
          );
        })}
      </MainView>
      <Footer />
    </PageWrapper>
  );
}
