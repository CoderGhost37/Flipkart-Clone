import React, { useState, useRef } from "react";
import styled from "styled-components";
import NavOptions from "./NavOptions";

const HamBurger = () => {
  const modalRef = useRef();
  const [openHam, setOpenHam] = useState(false);

  const handleClick = () => {
    setOpenHam(!openHam);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenHam(false);
    }
  };

  return (
    <Component openHam={openHam} ref={modalRef} onClick={closeModal}>
      <StyledBurger openHam={openHam} onClick={handleClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavOptions openHam={openHam} handleClick={handleClick} />
    </Component>
  );
};

const Component = styled.div`
  @media (max-width: 768px){
    position: ${({ openHam }) => (openHam && "fixed")};
    top: ${({ openHam }) => (openHam && "0")};
    left: ${({ openHam }) => (openHam && "0")};
    right: ${({ openHam }) => (openHam && "0")};
    bottom: ${({ openHam }) => (openHam && "0")};
    background-color: ${({ openHam }) => (openHam && "rgba(0, 0, 0, 0.8)")};
  }
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 2;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ openHam }) => (openHam ? "#ccc" : "#ffffff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ openHam }) => (openHam ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ openHam }) =>
        openHam ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ openHam }) => (openHam ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ openHam }) => (openHam ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default HamBurger;
