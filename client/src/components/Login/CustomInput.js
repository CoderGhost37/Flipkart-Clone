import React from 'react'
import styled from 'styled-components'

const CustomInput = ({ handleChange, type, name, label }) => {
  return (
      <Input>
        <input onChange={(e) => handleChange(e)} type={type} name={name} required />
        <div />
        <label className="label" for={name}>{label}</label>
      </Input>
  )
}

const Input = styled.div`
  height: 30px; 
  position: relative;
  padding: 30px 0 15px 0;
  input {
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: 1px solid silver;
    background: white;
    font-size: 22px;
    outline: none;
    &:focus ~ label,
    &:valid ~ label {
      transform: translateY(-150%);
      font-size: 15px;
    }
    &:focus ~ div::before,
    &:valid ~ div::before {
      transform: scaleX(1);
    }
  }
  label {
    position: absolute;
    bottom: 20px;
    left: 0px;
    color: grey;
    font-size: 20px;
    pointer-events: none;
    transition: all 0.2s ease;
  }
  div {
    position: absolute;
    bottom: 14px;
    height: 2px;
    width: 100%;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      border-bottom: 2px solid #2874f0;
      left: 0;
      bottom: -1px;
      transform: scaleX(0);
      transition: transform 0.2s ease;
    } 
  } 
`;

export default CustomInput