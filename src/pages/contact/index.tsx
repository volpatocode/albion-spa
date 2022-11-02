import {
  ContactBox,
  Description,
  FormWrapper,
  InfoWrapper,
  Input,
  MainContent,
  ContentWrapper,
  MainTitle,
  PageTitle,
  PageWrapper,
  TextInput,
  TitleBox,
} from "./styles";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar page="contact" />
      <MainContent>
        <TitleBox>
          <PageTitle>Contact me</PageTitle>
          <MainTitle>How can i help you?</MainTitle>
          <Description>Fill in the form or drop an email</Description>
        </TitleBox>
        <ContentWrapper>
          <InfoWrapper>
            <ContactBox>
              <Contact type="number" info="+1 012 345 678" />
              <Contact type="email" info="contact@lupus.com" />
              <Contact type="insta" info="lupus" />
            </ContactBox>
          </InfoWrapper>
          <FormWrapper>
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="text" />
            <Input placeholder="Subject" type="text" />
            <TextInput placeholder="Message" />
          </FormWrapper>
        </ContentWrapper>
      </MainContent>
      <Footer />
    </PageWrapper>
  );
}
