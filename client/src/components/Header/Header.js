import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HamBurger from "./HamBurger";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
            <img src="/assets/flipkart_logo.png" alt="" />
          </Link>
          <div>
            <span>Explore&nbsp;</span>
            <span>Plus</span>
            <img src="/assets/plus.png" alt="" />
          </div>
        </Logo>
        <SearchBox />
        <HamBurger />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background: #2874f0;
  top: 0;
  left: 0;
  padding: 0 24px;
  position: fixed;
  width: 100%;
  z-index: 100;
  @media (max-width: 900px) {
    padding: 0 15px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 65px;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  padding: 5px 0;
  font-style: italic;
  line-height: 0;
  font-size: 13px;
  a {
    img {
      width: 95px;
      @media (max-width: 600px) {
        width: 70px;
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    img {
      padding-left: 2px;
      width: 12px;
      @media (max-width: 600px) {
        width: 8px;
      }
    }
    span:nth-child(1) {
      color: white;
    }
    span:nth-child(2) {
      color: #ffe11b;
    }
    @media (max-width: 600px) {
      font-size: 10px;
    }
  }
`;

export default Header;
