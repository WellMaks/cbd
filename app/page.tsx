import React from "react";
import Carousel from "@/components/Carousel";
import BackgroundSlideShow from "@/components/BackgroundSlideShow";
import Info from "@/components/Info";

const Home = () => {
  const elements = [
    {
      imageUrl: "/images/icons/1.svg",
      title: "+60 000 CLIENTS SATISFAITS",
      text: "4,8/5 sur Google 9,5/10 sur Avis Garantis",
    },
    {
      imageUrl: "/images/icons/2.svg",
      title: "REMISE DE BIENVENUE",
      text: 'Profitez d\'une remise de 10% avec le code "BIENVENUE"',
    },
    {
      imageUrl: "/images/icons/3.svg",
      title: "POINTS DE FIDÉLITÉ",
      text: "Cumulez des points à chaque achat sur CBD.fr",
    },
    {
      imageUrl: "/images/icons/4.svg",
      title: "LIVRAISON RAPIDE",
      text: "Vos commandes sont livrées en 24/48 heures",
    },
  ];
  return (
    <>
      <div className="page-body ">
        <BackgroundSlideShow />
        <Carousel />
        <div className="flex justify-center space-x-6 max-w-2/5 mx-auto manual-center">
          {elements.map((elem, index) => (
            <Info key={index} {...elem} />
          ))}
        </div>
        <h1 className="text-4xl font-bold manual-center">
          PROMOTIONS CBD PAS CHERS
        </h1>
        <Carousel />
      </div>
    </>
  );
};

export default Home;
