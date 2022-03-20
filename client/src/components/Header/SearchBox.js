import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productAction";
import { Link } from "react-router-dom";


const SearchBox = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleClick = () => {
    setValue("");
  }

  return (
    <Search>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search for products, brands and more"
        />
      </div>
      <SearchIcon>
        <img src="/assets/search-icon.svg" alt="" />
      </SearchIcon>
      {value && (
        <DropDownContainer>
          {products
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(value.toLowerCase())
            )
            .map((product) => (
              <Link to={`/product/${product.id}`} style={{textDecoration: "none", color: "inherit"}}>
                <DropDownItem onClick={handleClick}>{product.title.longTitle}</DropDownItem>
              </Link>
            ))}
        </DropDownContainer>
      )}
    </Search>
  );
};

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  padding: 0 10px;
  position: relative;
  div {
    input {
      border: none;
      box-shadow: none;
      outline: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 510px;
      padding: 3px 5px 3px 10px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 17px;
      height: 34px;
      vertical-align: text-top;
      @media (max-width: 1100px) {
        width: 350px;
        font-size: 14px;
      }
      @media (max-width: 600px) {
        width: 250px;
        padding: 1px 3px 1px 7px;
        font-size: 12px;
      }
      @media (max-width: 420px) {
        width: 180px;
        padding: 0 2px 0 5px;
        font-size: 10px;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 8px;
  left: 500px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    left: 340px;
  }
  @media (max-width: 600px) {
    left: 225px;
  }
`;

const DropDownContainer = styled.div`
  position: absolute;
  width: 510px;
  padding: 0 6px;
  border-radius: 3px;
  color: black;
  background: white;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid #dbdbdb;
  @media (max-width: 1100px) {
    width: 350px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    width: 250px;
    font-size: 12px;
  }
  @media (max-width: 420px) {
    width: 180px;
    padding: 0 2px 0 5px;
    font-size: 10px;
  }
`;

const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px; 
`;

export default SearchBox;
