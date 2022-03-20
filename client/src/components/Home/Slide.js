import React from "react";
import styled from "styled-components";
import CountDown from "react-countdown";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Slide = ({ timer, title, products }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <p>
        {hours} : {minutes} : {seconds} Left
      </p>
    );
  };

  return (
    <Container>
      <Box>
        <span>{title}</span>
        {timer && (
          <Timer>
            <img src={timerURL} alt="" />
            <CountDown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <Button>VIEW ALL</Button>
      </Box>
      <hr />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`}>
            <Content>
              <img src={product.url} alt="" />
              <span style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </span>
              <span style={{ color: "green" }}>{product.discount}</span>
              <span style={{ color: "#212121", opacity: "0.6" }}>
                {product.tagline}
              </span>
            </Content>
          </Link>
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 12px;
  background-color: white;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 10px 0;
  span {
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 25px;
  }
  p {
    color: #7f7f7f;
    margin-left: 10px;
  }
  img {
    width: 24px;
    padding-left: 5px;
  }
`;

const Timer = styled.div`
  display: flex;
  @media (max-width: 530px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 10px;
  img {
    height: 150px;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
    margin-top: 5px;
    text-decoration: none;
  }
  @media (max-width: 530px) {
    padding: 20px 0px;
  }
`;

const Button = styled.div`
  margin-left: auto;
  margin-right: 20px;
  background-color: #2874f0;
  color: white;
  border-radius: 2px;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
`;

export default Slide;
