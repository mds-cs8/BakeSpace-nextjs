import About from "./components/Aboutus/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import Main from "./components/Main/Main";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Wrapper className={"mt-10 md:mt-32"}>
        <About />
        <Main />
      </Wrapper>
      <Footer />
    </main>
  );
}
