import { PageWrapper, Content, Wrapper, Title, Image } from "./styles";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {


  return (
    <PageWrapper>
      <Navbar page="about" />
      <Content>
        <Wrapper>
          <Title>Striking and unique fragrances</Title>
        </Wrapper>
        <Image src="/blackandwhite.jpg" />
      </Content>
      <Footer />
    </PageWrapper>
  );
}
