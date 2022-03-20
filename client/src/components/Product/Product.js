import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetails } from '../../actions/productAction';
import { addToCart } from '../../actions/cartAction';
import { payUsingPaytm } from '../../actions/payment';
import { post } from '../../utils/paytm';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const Product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { product } = useSelector(state => state.getProductDetails);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    useEffect(() => {
      dispatch(getProductDetails(id));
    }, [id]);
    
    const date = new Date(new Date().getTime() + (5*24*60*60*1000));

    const add_Cart = () => {
        dispatch(addToCart(id));
        navigate("/cart");
    }

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
        { product && Object.keys(product).length &&
            <Component>
                <Wrapper>
                    <img src={product.detailUrl} /><br/>
                    <div>
                        <button onClick={add_Cart}>
                            <ShoppingCartIcon />
                            ADD TO CART
                        </button>
                        <button onClick={buyNow}>
                            <FlashOnIcon />
                            BUY NOW
                        </button>
                    </div>
                </Wrapper>
                <Content>
                    <p style={{paddingTop:"30px", fontWeight:"600", fontSize:"24px"}}>{product.title.longTitle}</p> 
                    <div style={{fontSize: "14px", color: "#878787"}}>
                        12 ratings and 5 reviews
                        <span><img src={fassured} style={{width: "77px", marginLeft: "20px"}} /></span>
                    </div> 
                    <div>
                        <span style={{fontSize: "28px", fontWeight: "bold"}}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                        <span style={{color: "#878787"}}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                        <span style={{color: "#388E3C"}}>{product.price.discount} off</span>
                    </div>
                    <Offers>
                        <b>Available offers</b>
                        <p>
                            <img src="/assets/local-offer.svg" alt="" />
                            Special Price Get extra 10% off (price inclusive of discount)
                        </p>
                        <p>
                            <img src="/assets/local-offer.svg" alt="" />
                            Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                        </p>
                        <p>
                            <img src="/assets/local-offer.svg" alt="" />
                            Combo Offer Buy 2 items save 5%; Buy 3 or more save 10%
                        </p>
                        <p>
                            <img src="/assets/local-offer.svg" alt="" />
                            Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*
                        </p>
                    </Offers>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Delivery</td>
                                <td><b>{date.toDateString()} | ₹40</b></td>
                            </tr>
                            <tr>
                                <td>Warranty</td>
                                <td>No Warranty</td>
                            </tr>
                            <tr>
                                <td>Seller</td>
                                <td>
                                    <span style={{color: "#2874f0"}}>SuperComNet</span>
                                    <p>GST Invoice Available</p>
                                    <p>14 days Return Policy</p>
                                    <p>View more sellers starting from ₹300</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <img src={sellerURL} style={{width: "30vw"}} />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{product.description}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Content>
            </Component>
        }
      </Container>
  )
}

const Container = styled.div`
    margin-top: 55px;
`;

const Component = styled.div`
    margin: 10px 80px;
    background: white;
    display: flex;
    @media (max-width: 1350px){
        margin: 10px 0;
    }
    @media (max-width: 1000px){
        flex-direction: column;
        margin: auto;
    }
`;

const Wrapper = styled.div`
    min-width: 40%;
    padding: 40px 0 0 80px;
    img {
        padding: 15px 20px;
        margin-bottom: 10px;
        border: 1px solid #f0f0f0;
        width: 450px;
        @media (max-width: 1350px){
            display: block;
            padding: 10px 10px;
            margin: 0 auto;
            width: 400px;
        }
        @media (max-width: 500px){
            width: 280px;
        }
    }
    @media (max-width: 1000px){
        padding: 40px 0 0 10px;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center; 
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8vh;
        width: 46%;
        border: none;
        font-weight: 600;
        font-size: 16px;
        margin-right: 10px;
        border-radius: 3px;
        cursor: pointer;
        &:nth-child(1) {
            background: #ff9f00;
            color: white;
        }
        &:nth-child(2) {
            background: #fb641b;
            color: white;
        }
        img {
            width: 5px;
        }
    }
}
`;


const Content = styled.div`
    font-size: 18px;
    margin-left: 40px;
    *{
        margin-top: 10px;
    }
`;

const Offers = styled.div`
    margin-top: 20px;
    p {
        font-size: 15px;
        img {
            color: "#00CC00";
            margin-right: 10px;
        }
        &:nth-child(1) {
            font-size: 18px;
        }
        @media (max-width: 700px){
            font-size: 14px;
        }
    }
`;

const Table = styled.table`
    margin-top: 20px;
    font-size: 15px;
    tr {
        vertical-align: baseline;
        td {
            padding: 12px;
            &:nth-child(1) {
                color: #878787;
            }
        }
    }
`;

export default Product