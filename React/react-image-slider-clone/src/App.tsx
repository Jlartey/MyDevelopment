import apartment1 from "./imgs/apartment1.jpg";
import apartment2 from "./imgs/apartment2.jpg";
import apartment3 from "./imgs/apartment3.jpg";
import apartment4 from "./imgs/apartment4.jpg";
import apartment5 from "./imgs/apartment5.jpg";
import apartment6 from "./imgs/apartment6.jpg";
import apartment7 from "./imgs/apartment7.jpg";
import apartment8 from "./imgs/apartment8.jpg";
import apartment9 from "./imgs/apartment9.jpg";
import apartment10 from "./imgs/apartment10.jpg";
import car1 from "./imgs/car-1.jpg";
import car2 from "./imgs/car-2.jpg";
import car3 from "./imgs/car-3.jpg";
import car4 from "./imgs/car-4.jpg";
import car5 from "./imgs/car-5.jpg";

import ImageSlider from "./ImageSlider";

const IMAGES = [
  { url: apartment1, alt: "Apartment1" },
  { url: apartment2, alt: "Apartment2" },
  { url: apartment3, alt: "Apartment3" },
  { url: apartment4, alt: "Apartment4" },
  { url: apartment5, alt: "Apartment5" },
  { url: apartment6, alt: "Apartment6" },
  { url: apartment7, alt: "Apartment7" },
  { url: apartment8, alt: "Apartment8" },
  { url: apartment9, alt: "Apartment9" },
  { url: apartment10, alt: "Apartment10" },
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];
export default function App() {
  return (
    <div
      style={{
        maxWidth: "100%",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  );
}
