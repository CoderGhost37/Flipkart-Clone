import React, { useState } from 'react';
import styled from 'styled-components';

const CartItem = ({ item, removeItem }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const [counter, setCounter] = useState(1);

    const handleDecrement = () => {
        setCounter(counter => counter - 1);
    }
    const handleIncrement = () => {
        setCounter(counter => counter + 1);
    }
  return (
      <Container>
        <LeftComponent>
            <img src={item.url} alt="" />
            <div>
                <button onClick={handleDecrement} disabled={counter===1}>-</button>
                <div>
                    <p>{counter}</p>
                </div>
                <button onClick={handleIncrement}>+</button>
            </div>
        </LeftComponent> 
        <RightComponent>
            <h3>{item.title.longTitle}</h3>
            <p>Seller: SuperComNet <img src={fassured} alt="fassured" /></p>
            <div>
                <span style={{fontSize: "20px", fontWeight: "bold"}}><b>₹{item.price.cost}</b></span> 
                <span style={{color: "#878787"}}><strike>₹{item.price.mrp}</strike></span>
                <span style={{color: "#388E3C"}}>{item.price.discount} off</span>
            </div>
            <button onClick={() => removeItem(item.id)}>REMOVE</button>
        </RightComponent> 
      </Container>
  )
}

const Container = styled.div`
    display: flex;
    border-top: 1px solid #f0f0f0;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);
`;

const LeftComponent = styled.div`
    margin: 20px;
    img {
        width: 140px;
        height: 150px;
        @media (max-width: 400px){
            width: 100px;
            height: 110px;
        }
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        button {
            background: none;
            width: 28px;
            height: 28px;
            background: linear-gradient(#fff,#f9f9f9);
            display: inline-block;
            border: 1px solid #c2c2c2;
            cursor: pointer;
            font-size: 16px;
            border-radius: 50%;
            padding-top: 1px;
            line-height: 1;
        }
        div {
            display: inline-block;
            padding: 3px 6px;
            height: 100%;
            width: 46px;
            border-radius: 2px;
            background-color: #fff;
            border: 1px solid #c2c2c2;
            margin: 0 5px;
            p {
                border: none;
                font-size: 14px;
                font-weight: 500;
                vertical-align: middle;
                text-align: center;
            }
        }
    }
`;

const RightComponent = styled.div`
    margin-top: 20px;
    p {
        display: flex;
        align-items: center;
        margin-top: 10px;
        color: #878787;
        img {
            width: 60px;
            margin-left: 10px;
            @media (max-width: 400px){
                width: 40px;
            }
        }
    }
    div {
        margin: 20px 0;
        span {
            padding: 0 7px;
        }
    }
    button {
        display: inline-block;
        box-shadow: none;
        background: none;
        border: none;
        outline: 0;
        font-weight: 500;
        font-size: 16px;
        margin-top: 10px;
        cursor: pointer;
        &:hover {
            color: #2874f0;
        }
        @media (max-width: 450px){
            margin-top: 0;
            margin-bottom: 10px;
        }
    }
`;

export default CartItem