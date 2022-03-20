import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginContext } from "../../context/ContextProvider";

import Profile from "./Profile";
import LoginDialog from "../Login/Login";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavOptions = ({ openHam, handleClick }) => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const { cartItems } = useSelector((state) => state.cart);

  let width = `${window.innerWidth}` < '768';

  const openLoginDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <Nav openHam={openHam}>
        <Login onClick={handleClick}>
          {account ? (
            <Profile account={account} setAccount={setAccount} />
          ) : (
            <a onClick={openLoginDialog}>
              <span>Login</span>
            </a>
          )}
        </Login>
        <More>
          <a>
            <span>More</span>
            <img src="/assets/down_arrow.svg" alt="" />
          </a>
        </More>
        <Cart onClick={handleClick}>
          <Link to="/cart">
            <div>
              <img src="/assets/shopping_cart.svg" alt="" />
              {/* <img src="/assets/down_arrow.svg" alt="" /> */}
                {/* <ShoppingCartIcon color="white" /> */}
              {cartItems.length !== 0 && <span>{cartItems.length}</span>}
            </div>
            <span>Cart</span>
          </Link>
        </Cart>
      </Nav>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </>
  );
};

const Nav = styled.ul`
  display: flex;
  align-items: center;
  padding-right: 10px;
  flex-wrap: nowrap;
  list-style: none;
  li {
    padding: 0 10px;
    @media (max-width: 830px){
        padding: 0;
    }
  }
  @media (max-width: 1024px){
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    position: fixed;
    background-color: #2874f0;
    top: 0;
    right: -11px;
    height: 100vh;
    width: 20vw;
    padding: 60px;
    transform: ${({ openHam }) => openHam ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const Login = styled.li`
  a {
    cursor: pointer;
    span {
      border-radius: 2px;
      background: white;
      color: #2874f0;
      font-size: 19px;
      font-weight: 600;
      padding: 8px 40px;
      @media (max-width: 900px) {
        padding: 7px 25px;
      }
    }
    @media (max-width: 768px) {
      margin-top: 50px;
    }
  }
`;

const More = styled.li`
  a {
    display: flex;
    margin: 0 20px;
    cursor: pointer;
    span {
      background: transparent;
      color: white;
      font-size: 19px;
      font-weight: 600;
      padding: 0 5px;
    }
    @media (max-width: 768px) {
      margin-top: 50px;
    }
  }
`;

const Cart = styled.li`
  position: relative;
  width: fit-content;
  color: white;
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    min-width: 30px;
    span {
      border-radius: 2px;
      background: transparent;
      color: white;
      font-size: 19px;
      font-weight: 600;
      padding: 0 7px;
    }
    @media (max-width: 768px) {
      margin-top: 50px;
    }
    div {
      span {
        position: absolute;
        border: 1px solid white;
        right: 62px;
        transform: translate(50%, -50%);
        background-color: red;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 1px 5px;
        font-size: 0.9em;
        @media (max-width: 830px){
          right: 55px;
        }
      }
    }
  }
`;

export default NavOptions;
