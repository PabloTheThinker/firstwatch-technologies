import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Divisions from "./components/Divisions";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Divisions />
        <Products />
      </main>
      <Footer />
    </>
  );
}
