import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('/');
    }

  return (
      <Wrapper>
          <h3>My Cart</h3>
          <div>
            <img src={emptycarturl} />
            <h4>Your cart is empty!</h4>
            <p>Add items to it now.</p>
            <button onClick={handleClick}>Shop now</button>
          </div>
      </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 90px auto;
    width: 80vw;
    height: 65vh;
    background: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 2px 0px;
    h3 {
        font-size: 20px;
        line-height: 56px;
        padding: 0 24px;
    }
    div {
        text-align: center;
        padding-top: 60px;
        img {
            width: 20%;
        }
        h4 {
            font-size: 18px;
        }
        p {
            font-size: 12px;
        }
        button {
            background: #2874f0;
            color: white;
            border: none;
            outline: none;
            font-size: 16px;
            padding: 12px 72px;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
            cursor: pointer;
        }
        &>*{
            margin: 10px;
        }
    }
`;

export default EmptyCart