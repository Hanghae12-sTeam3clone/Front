import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import styled from "styled-components";
import SearchForm from "../components/SearchForm";
import logo from "../asset/free-icon-pinterest-3128340.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [ckeckLogin, setCheckLogin] = useState(
    !!localStorage.getItem("access_token")
  );
  const [signUpModal, setSignUpModal] = useState(false);
  const [LogInModal, setLogInModal] = useState(false);
  const ToggleSignUpModal = () => setSignUpModal(false);
  const ToggleLoginModal = () => setLogInModal(false);
  // useEffect(()=>{
  //   if (localStorage.setItem())
  // })

  console.log("현재 check", ckeckLogin);
  const LogoutHandler = () => {
    localStorage.removeItem("access_token");


    localStorage.removeItem("refresh_token");
    localStorage.removeItem("nickname");

    setCheckLogin(false);
    alert("로그아웃 완료");
  };

  const MypageHandler = () => {
    navigate("/profile/123");
  };

  return (
    <StHeaderDiv>
      <SignUp show={signUpModal} onHide={ToggleSignUpModal} />
      <Login
        show={LogInModal}
        onHide={ToggleLoginModal}
        check={() => setCheckLogin((prev) => !prev)}
      />
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="ms-3" href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Pinterest
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <SearchForm />
          <Navbar.Collapse id="basic-navbar-nav">
            {!ckeckLogin ? (
              <Nav className="ms-auto w-5">
                <Nav.Link>
                  <Button
                    variant="danger"
                    style={{
                      width: "100px",
                      backgroundColor: "#ef1717",
                      borderColor: "#ef1717",
                      fontWeight: "bold",
                    }}
                    onClick={() => setLogInModal(true)}
                  >
                    로그인
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button
                    variant="secondary"
                    style={{
                      width: "100px",
                      backgroundColor: "#ececec",
                      borderColor: "#ececec",
                      color: "#000000",
                      fontWeight: "bold",
                    }}
                    onClick={() => setSignUpModal(true)}
                  >
                    가입하기
                  </Button>
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="ms-auto w-5">
                <Nav.Link>
                  <Button
                    variant="danger"
                    style={{
                      width: "120px",
                      backgroundColor: "#ececec",
                      borderColor: "#ececec",
                      color: "#000000",

                      fontWeight: "bold",
                    }}
                    onClick={MypageHandler}
                  >
                    마이페이지
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button
                    variant="danger"
                    style={{
                      width: "100px",
                      backgroundColor: "#ef1717",
                      borderColor: "#ef1717",
                      fontWeight: "bold",
                    }}
                    onClick={LogoutHandler}
                  >
                    로그아웃
                  </Button>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </header>
    </StHeaderDiv>
  );
};

export default Header;

const StHeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;

const StInputBox = styled.input`
  width: 70%;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 24px;
  background-color: #efefef;
  color: #333;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
