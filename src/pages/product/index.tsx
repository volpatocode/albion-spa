import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

import {
  PageWrapper,
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
} from "./styles";
import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();

  let products = [
    {
      id: "chanel",
      name: "Chanel",
      reviews: "447",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      size: "Large",
      type: "Nº5",
      price: "445.ºº",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore facilis accusamus ipsum repellat asperiores voluptatibus sit quas minima. Fugit eaque quis reprehenderit saepe modi obcaecati molestias veritatis voluptas quod odit.",
    },
    {
      id: "mystere",
      name: "Mystere",
      reviews: "1227",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      size: "Large",
      type: "Unique",
      price: "244.ºº",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore facilis accusamus ipsum repellat asperiores voluptatibus sit quas minima. Fugit eaque quis reprehenderit saepe modi obcaecati molestias veritatis voluptas quod odit.",
    },
    {
      id: "olympea",
      name: "Olympea",
      reviews: "221",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      size: "Large",
      type: "Unique",
      price: "122.ºº",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore facilis accusamus ipsum repellat asperiores voluptatibus sit quas minima. Fugit eaque quis reprehenderit saepe modi obcaecati molestias veritatis voluptas quod odit.",
    },
    {
      id: "hypnose",
      name: "Hypnose",
      reviews: "3449",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      size: "Medium",
      type: "Unique",
      price: "344.ºº",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore facilis accusamus ipsum repellat asperiores voluptatibus sit quas minima. Fugit eaque quis reprehenderit saepe modi obcaecati molestias veritatis voluptas quod odit.",
    },
  ];
  return (
    <PageWrapper>
      <Navbar logo="black" anchor="white" />
      {products.map((product) => {
        return (
          product.id == productId && (
            <Content>
              <Carousel />
              <Info>
                <Row>
                  <Title> {product.name}</Title>
                  <Legend>{product.reviews} reviews</Legend>
                  <Typography>{product.description}</Typography>
                  <Divider />
                </Row>
                <Row>
                  <Subtitle>Bottle Size:</Subtitle>
                  <Typography>{product.size}</Typography>
                  <Divider />
                </Row>
                <Row>
                  <Subtitle>Perfume Type:</Subtitle>
                  <Typography>{product.type}</Typography>
                  <Divider />
                  <Price>${product.price}</Price>
                  <BoxButtons>
                    <Button variant="outlined">Wishlist</Button>
                    <Button variant="contained">Add to Cart</Button>
                  </BoxButtons>
                </Row>
                <Details>
                  <Row>
                    <Subtitle>Product Detail:</Subtitle>
                    <Typography align="justify">{product.details}</Typography>
                  </Row>
                </Details>
              </Info>
            </Content>
          )
        );
      })}
      <Footer />
    </PageWrapper>
  );
}
