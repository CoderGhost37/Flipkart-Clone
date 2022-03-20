import React, { useState, useRef, useEffect, useCallback } from "react";
import { signUp, signIn } from "../../actions/auth";

import styled from "styled-components";
import CustomInput from "./CustomInput";

const initialValue = {
  login: {
      view: 'login',
      heading: 'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subHeading: 'Sign up with your mobile number to get started'
  }
}

const signupInitialState = {
  name: '',
  username: '',
  email: '',
  password: '',
  phone: '',
};

const loginInitialState = {
  username: '',
  password: '',
}

const Login = ({ open, setOpen, setAccount }) => {
  const modalRef = useRef();
  const [account, toggleAccount] = useState(initialValue.login);
  const [formData, setFormData] = useState(signupInitialState);
  const [login, setLogin] = useState(loginInitialState);
  const [error, setError] = useState(false);

  const clear = () => {
    setFormData(signupInitialState);
    setLogin(loginInitialState);
  }

  const toggleUserAccount = () => {
    toggleAccount(initialValue.signup);
  }
  
  const handleClose = () => {
    setOpen(false);
    setError(false);
    toggleAccount(initialValue.login);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpen(false);
      setError(false);
      toggleAccount(initialValue.login);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        setError(false);
        toggleAccount(initialValue.login);
      }
    },
    [setOpen, open]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const signUpUser = async () => {
    const response = await signUp(formData);
    if(!response) return;
    handleClose();
    clear();
    setError(false);
    setAccount(formData.username);
  }

  const loginUser = async () => {
    const response = await signIn(login);
    if(!response) {
      setError(true);
      return;
    }
    handleClose();
    clear();
    setError(false);
    setAccount(login.username);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <>
      {open === true && (
        <Component ref={modalRef} onClick={closeModal}>
          <ModalWrapper open={open}>
            <ModalImg>
              <h3>{account.heading}</h3>
              <p>{account.subHeading}</p>
            </ModalImg>
            {account.view === "login" ? (
              <ModalContent>
                <div>
                <CustomInput handleChange={onChange} type="text" name="username" label="Enter Username" />
                <CustomInput handleChange={onChange} type="password" name="password" label="Enter Password" />
                { error && <p style={{color: "red"}}>Invalid username or password</p> }
                </div>
                <p> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy. </p>
                <LoginBtn onClick={() => loginUser()}>Login</LoginBtn>
                <p>OR</p>
                <OTPBtn>Request OTP</OTPBtn>
                <span onClick={() => toggleUserAccount()}>New to Flipkart? Create an account</span>
              </ModalContent>
                ) : (
              <ModalContent>
                <CustomInput handleChange={handleChange} type="text" name="name" label="Enter Name" />
                <CustomInput handleChange={handleChange} type="text" name="username" label="Enter Username" />
                <CustomInput handleChange={handleChange} type="email" name="email" label="Enter Email" />
                <CustomInput handleChange={handleChange} type="password" name="password" label="Enter Password" />
                <CustomInput handleChange={handleChange} type="phone" name="phone" label="Enter Phone Number" />
                <LoginBtn onClick={() => signUpUser()}>Sign Up</LoginBtn>
              </ModalContent>
            )} 
            <CloseModalButton
              src={"/assets/close-icon.png"}
              onClick={handleClose}
            />
          </ModalWrapper>
        </Component>
      )}
    </>
  );
};

const Component = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalWrapper = styled.div`
  height: 80vh;
  width: 110vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: white;
  display: grid;
  grid-template-columns: 8fr 12fr;
  z-index: 100;
  border-radius: 5px;
  position: relative;
  margin: 0 auto;
  border-radius: 5px;
`;

const ModalImg = styled.div`
  background-image: url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png");
  background-repeat: no-repeat;
  background-position: center 85%;
  background-color: #2874f0;
  height: 66vh;
  border-radius: 5px 0 0 5px;
  padding: 7vh 6vh;
  p {
    font-size: 22px;
    line-height: 1.5;
    margin-top: 20px;
    color: #dbdbdb;
  }
  h3 {
    font-weight: 600;
    font-size: 30px;
    color: white;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 45px 35px 16px;
  div {
    width: 100%;
  }
  p {
    color: #878787;
  }
  span {
    color: #2874f0;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
`;

const LoginBtn = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 48px;
  background: #fb641b;
  font-size: 17px;
  line-height: 180%;
  color: white;
  border: none;
  cursor: pointer;
`;

const OTPBtn = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 48px;
  font-size: 17px;
  line-height: 180%;
  color: #2874f0;
  background: white;
  border: none;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
`;

const CloseModalButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export default Login;
