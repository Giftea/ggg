import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import AboutTwo from "@/components/about";
import TeamOne from "@/components/team";
import ServiceTwo from "@/components/services";
import HeaderOne from "@/components/header";
import SliderOne from "@/components/slider";
import MenuContextProvider from "@/context/menu-context";

const Home = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home Page">
        <HeaderOne />
        <SliderOne />
        <AboutTwo />
        <ServiceTwo />
        <TeamOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Home;
