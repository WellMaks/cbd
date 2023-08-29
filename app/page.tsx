import React from "react";
import Carousel from "@/components/Carousel";
import BackgroundSlideShow from "@/components/BackgroundSlideShow";
import Info from "@/components/Info";
import Info2 from "@/components/Info2";

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
        <Info2
          title={"POURQUOI PRENDRE DU CBD ?"}
          smallText={
            "Vous avez entendu parler du CBD et de ces bienfaits et vous êtes arrivé sur notre boutique CBD.fr, mais vous ne  savez pas exactement ce que c'est et quels sont ses effets possibles sur votre organisme ? En 3-4 lignes nous allons essayer de vous expliquer en quoi le cannabidiol peut vous apporter ses bienfaits au quotidien. Voici les principaux effets qu'il pourrait vous procurer :Soulagement de la Douleur : Il peut interagir avec les récepteurs de votre cerveau et de votre système immunitaire, réduisant l'inflammation et atténuant la douleur. Réduction de l'Anxiété et de la Dépression : Des études ont montré qu'il pourrait aider à réduire l'anxiété et la dépression en agissant sur le système sérotoninergique. Amélioration du Sommeil : Il est souvent utilisé pour combattre l'insomnie et améliorer la qualité du sommeil. Traitement de Certaines Maladies de la Peau : Grâce à ses propriétés anti-inflammatoires, il peut être utile dans le traitement de divers problèmes de peau, comme l'eczéma et le psoriasis. Soutien dans le Traitement de Certaines Maladies Neurologiques : Il existe des preuves qu'il peut aider dans le traitement de maladies comme l'épilepsie et la sclérose en plaques. Effets Cardiovasculaires Positifs : Certaines recherches suggèrent qu'il peut favoriser la santé cardiaque en réduisant la pression artérielle et en prévenant les dommages cardiaques. Aide à la Digestion : Il peut aider à réguler l'appétit et réduire les nausées, ce qui peut être bénéfique pour ceux qui ont des problèmes digestifs. Il est important de noter que, bien que ces effets soient prometteurs, le CBD n'est pas un remède universel et ne doit pas être utilisé comme substitut à un traitement médical approprié. Toujours consulter un professionnel de la santé avant d'en consommer. En achetant sur CBD.fr, vous avez l'assurance d'obtenir des produits de qualité, soumis à des contrôles rigoureux, qui respectent les normes légales et réglementaires en vigueur.Vous vous posez encore des questions ? Contactez vite notre service client qui se fera un plaisir de vous renseigner et de vous conseiller sur les produits les plus adaptés à vos besoins."
          }
          bgColor={"white"}
        />
        <Info2
          title={"CBD.FR, DES PASSIONNÉS DU CANNABIS LÉGAL EN FRANCE"}
          smallText={
            "Toute l'équipe vous souhaite la bienvenue sur notre e-shop de cannabis légal : un site basé en France, unique et spécialisé dans la distribution de produits à base de chanvre et de CBD (= molécule cannabidiol). Depuis 2003, soit plus de 20 ans, nous sélectionnons pour vous les meilleurs articles et marques pour vous garantir une expérience récréative de qualité, tout en vous aidant à améliorer votre bien-être au quotidien, et ce, en toute légalité.Tous les produits présents sur notre shop respectent évidemment la législation communautaire (UE) de l'Autorité européenne de sécurité : pour en savoir davantage sur la légalité du CBD : nous vous invitons à consulter cet article : \"Le CBD : la législation en France et dans l'Union Européenne\"ou vous rendre sur le site Mildeca. Les fleurs issues de nos plus belles plantes respectent le taux fixé par la réglementation communautaire et ont un taux de THC inférieur au taux autorisé en France de 0,2% de THC, et ce, indépendamment de son goût ou de ses saveurs, Les autres produits, comme la cosmétique, les produits de bien-être, les huiles, les e-liquides ou bien encore l'alimentation, respectent quant à eux, le taux fixé par la législation nationale française et européenne, soit 0% de THC. Nous rappelons aussi que le CBD n'est pas un médicament et qu'il ne remplace pas des traitements médicamenteux. Nous garantissons une traçabilité de tous nos articles à base de cannabis, l'origine du chanvre que nous vendons est connue. Puis nous collaborons avec un laboratoire tiers, indépendant et français pour garantir des produits en toute légalité (consultez l'article \"Les analyses en laboratoire de CBD.FR\" pour en savoir davantage sur notre politique rigoureuse de contrôle) Ainsi, en achetant des e-liquides, nos fleurs, nos cosmétiques, nos huiles full ou broad spectrum, vous avez la garantie de commander en toute sécurité, et de consommer du chanvre de qualité, pur et sans coupure, que vous recevrez dans un pli discret, inodore et anonymisé."
          }
          bgColor={"green-500"}
        />
      </div>
    </>
  );
};

export default Home;
