import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeFromCart } from "../../actions/cartAction";
import { payUsingPaytm } from '../../actions/payment';
import { post } from '../../utils/paytm';
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalPrice from "./TotalPrice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const buyNow = async () => {
    const response = await payUsingPaytm({ amount: 100, email: "ghost123@gmail.com" });
    
    var info = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response
    }
    post(info);
  }

  return (
    <Container>
      {cartItems.length ? (
        <Content>
          <LeftComponent>
            <header>
              <h3>My Cart ({cartItems.length})</h3>
            </header>
            {cartItems.map((item) => (
              <CartItem item={item} removeItem={removeItem} />
            ))}
            <footer>
                <button onClick={buyNow}>
                    <span>Place order</span>
                </button>
            </footer>
          </LeftComponent>
          <TotalPrice cartItems={cartItems} />
        </Content>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 65px;
`;

const Content = styled.div`
  padding: 30px 30px;
  display: flex;
  @media (max-width: 900px){
    flex-direction: column;
    padding: 0;
  }
`;

const LeftComponent = styled.div`
  background: white;
  width: 67%;
  header {
    padding: 15px 24px;
    background: white;
    font-size: 18px;
  }
  footer {
    border-top: 1px solid #f0f0f0;
    padding: 16px 22px;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    display: flex;
    justify-content: flex-end;
    button {
      color: #fff;
      background: #fb641b;
      border: none;
      border-radius: 2px;
      width: 250px;
      height: 50px;
      cursor: pointer;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
      span {
          font-size: 16px;
          font-weight: 500;
          text-transform: uppercase;
      }
      @media (max-width: 420px){
        width: 180px;
      }
    }
  }
  @media (max-width: 900px){
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default Cart;
