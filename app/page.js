import About from "./components/Aboutus/About";
import HeroSection from "./components/Hero/HeroSection";
import Main from "./components/Main/Main";
import ProductCard from "./components/ProductCard/ProductCard";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Wrapper className={"mt-32"}>
        <About />

        <Main />
      </Wrapper>
    </main>
  );
}
