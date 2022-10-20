import { products } from "../../data/data";
import Card from "../Card";
import { CardList, Container, InfoBox, Info, CardBox } from "./styles";

export default function index() {
  return (
    <CardList>
      <Container>
        <InfoBox>
          <Info>New Products</Info>
        </InfoBox>
        <CardBox>
          {products.map((product) => {
            return (
              <Card
                key={product?.id}
                href={`/catalogue/${product?.id}`}
                src={`${product?.id}.png`}
                productName={`${product?.name}`}
              />
            );
          })}
        </CardBox>
      </Container>
    </CardList>
  );
}
