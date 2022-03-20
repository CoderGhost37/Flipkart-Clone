import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";

const Banner = () => {
  return (
    <Container>
      <Carousel
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{          
            style: {
                color: '#494949',
                backgroundColor: 'white',
                borderRadius: 0,
                margin: 0,
            }
        }} 
      >
        {bannerData.map((image) => (
          <Content>
            <img src={image} />
          </Content>
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
    margin-top: 10px;
    max-height: 280px;
`;

const Content = styled.div`
  img {
    width: "100%";
    height: 280px;
    @media (max-width: 768px) {
      /* object-fit: cover; */
      height: 150px;
    }
  }
`;

export default Banner;
