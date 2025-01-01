import ImageGallery from "../../components/SrollGallery";
import CarouselComponent from "../../components/Carousel";
import Navbar from "../../components/NavBar";
import SmoothScroll from "../../components/SmoothScroll";
import ProductsSection from "../../components/ProductsHeading";

export default function Home() {
  return (
    <div>
      <SmoothScroll />
      <Navbar />
      <CarouselComponent />

      <ProductsSection />
      <ImageGallery />
    </div>
  );
}
