import Navbar from "../../components/Navbar";

import { PageWrapper, Content, MainContent, Image, TitleBox, Title } from "./styles";
import CardList from "../../components/CardList";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar logo="black" anchor="black" />
      <Content>
        <MainContent>
          <TitleBox>
            <Title>be lupus</Title>
            <Title style={{ alignSelf: "flex-end" }}>be us</Title>
          </TitleBox>
          <Image src="/test3.png" />
        </MainContent>
        <CardList />
      </Content>
    </PageWrapper>
  );
}
