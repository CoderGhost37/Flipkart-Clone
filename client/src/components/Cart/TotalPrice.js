import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TotalPrice = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
      totalAmount();
    }, [cartItems])
    

    const totalAmount = () => {
        let price=0, discount=0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        })
        setPrice(price);
        setDiscount(discount);
    }

  return (
      <Container>
          <Component>
            <p>PRICE DETAILS</p>
          </Component>
          <Wrapper>
            <p>Price ({cartItems.length} {cartItems.length===1 ? 'item' : 'items'}) <span>₹{price}</span></p>
            <p>Discount <span style={{ color: "green" }}>-₹{discount}</span></p>
            <p>Delivery Charges <span style={{ color: "green" }}>₹40</span></p>
            <p><b>Total Amount <span>₹{price-discount+40}</span></b></p>
            <p style={{ color: "green" }}>You will save ₹{discount-40} on this order</p>
          </Wrapper>
      </Container>
  )
}

const Container = styled.div`
    margin-left: 20px;
    width: 30%;
    max-height: 42vh;
    background: white;
    @media (max-width: 900px){
        width: 100%;
        margin-left: 0;
    }
`;

const Component = styled.div`
    padding: 16px 24px; 
    color: #878787;
    border-bottom: 1px solid #f0f0f0;
`;

const Wrapper = styled.div`
    padding: 15px 24px; 
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);
    &>* {
        margin-top: 20px;
    }
    p {
        span {
            float: right;
        }
        &:nth-child(4) {
            font-size: 18px;
            font-weight: 600;
            border-top: 1px dashed #e0e0e0;
            border-bottom: 1px dashed #e0e0e0;
            padding: 20px 0;
        }
    }
`;

export default TotalPrice