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

  const createPageHandler = () => {
    navigate("/create")
  }

  return (
    <>
            {!ckeckLogin ? (
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
                    <StHeadTitle>Pinterest</StHeadTitle>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto w-5">
                <Nav.Link>
                  <StName>소개</StName>
                  <StName>비지니스</StName>
                  <StName>언론</StName>
                  <Button
                    variant="danger"
                    style={{
                      width: "80px",
                      backgroundColor: "#ef1717",
                      borderColor: "#ef1717",
                      fontWeight: "bold",
                      borderRadius: "30px"
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
                      borderRadius: "30px"
                    }}
                    onClick={() => setSignUpModal(true)}
                  >
                    가입하기
                  </Button>
                </Nav.Link>
              </Nav>
              </Navbar.Collapse>
        </Navbar>
      </header>
    </StHeaderDiv>
            ) : (
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
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Link>
                  <Button
                    variant="danger"
                    style={{
                      width: "50px",
                      backgroundColor: "#ffffff",
                      borderColor: "#ececec",
                      color: "#000000",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                    onClick={() => navigate("/")}
                  >
                    홈
                  </Button>
                  </Nav.Link>
                  <Nav.Link>
                  <Button
                    variant="danger"
                    style={{
                      width: "90px",
                      fontSize: "16px",
                      backgroundColor: "#ffffff",
                      borderColor: "#ececec",
                      color: "#000000",

                      fontWeight: "bold",
                    }}
                    onClick={createPageHandler}
                  >
                    만들기
                  </Button>
                </Nav.Link>
          <SearchForm />
          <Navbar.Collapse id="basic-navbar-nav">
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
              </Navbar.Collapse>
        </Navbar>
      </header>
    </StHeaderDiv>
            )}
    </>
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
const StHeadTitle = styled.text`
  color: red;
`
const StName = styled.text`
  margin-right: 30px;
  font-size: 16px;
  font-weight: 1000;
  color: black;
`