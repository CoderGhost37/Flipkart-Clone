import React, { useState } from "react";
import styled from "styled-components";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const logout = () => {
    setAccount('');
  }

  return (
    <Wrapper>
      <span onClick={handleClick}>{account}</span>
      {open && (
        <DropDownContainer>
          <DropDownItem onClick={() => { handleClick(); logout() }}>
            <img src="/assets/logout.svg" alt="" />
            Logout
          </DropDownItem>
        </DropDownContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  font-size: 18px;
  position: relative;
  span {
    cursor: pointer;
  }
`;

const DropDownContainer = styled.div`
  position: absolute;
  top: 150%;
  width: 100%;
  padding: 10px 40px;
  border-radius: 3px;
  color: black;
  background: white;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid #dbdbdb;
`;

const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  img {
    padding-right: 5px;
  }
`;

export default Profile;