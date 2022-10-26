import Navbar from "../../components/Navbar";

import {
  PageWrapper,
  MainView,
  Content,
  MainContent,
  Image,
  TitleBox,
  Title,
} from "./styles";
import CardList from "../../components/CardList";
import Footer from "../../components/Footer";

export default function Home() {

  return (
    <PageWrapper>
      <MainView>
      <Navbar
        page="home"
      />
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
      </MainView>
      <Footer/>
    </PageWrapper>
  );
}
