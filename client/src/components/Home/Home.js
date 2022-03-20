import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import MidSection from "./MidSection";
import Slide from "./Slide";
import TopBar from "./TopBar";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productAction";

const Home = () => {
  const adURL = "https://rukminim1.flixcart.com/flap/464/708/image/306832ab03f64a50.jpg?q=70";
  
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <TopBar />
      <Component>
        <Banner />
        <Section>
          <Box1>
            <Slide timer={true} title="Deals of the Day" products={products} />
          </Box1>
          <Box2>
            <img src={adURL} width="230px" />
          </Box2>
        </Section>
        <MidSection />
        <Slide timer={false} title="Discounts For You" products={products} />
        <Slide timer={false} title="Suggested Items" products={products} />
        <Slide timer={false} title="Top Selection" products={products} />
        <Slide timer={false} title="Recommended For You" products={products} />
      </Component>
    </>
  );
};

const Component = styled.div`
  padding: 10px;
  background: #f2f2f2;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
`;
const Box1 = styled.div`
  width: 83%;
  @media (max-width: 1330px) {
    width: 100%;
  }
`;
const Box2 = styled.div`
  background: #ffffff;
  border-radius: 2px;
  padding: 4px;
  margin: 10px 0 0 10px;
  width: 15%;
  @media (max-width: 1330px) {
    display: none;
  }
`;

export default Home;
