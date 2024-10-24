import React from "react";
import Carousel from "@/components/ features /swiper/swiper";

const Home: React.FC = () => {
  return (
    <main className="p-2">
      <Carousel
        header="CASINO"
        buttonText="SEE ALL GAMES"
        buttonHref="/details"
      />
    </main>
  );
};

export default Home;
