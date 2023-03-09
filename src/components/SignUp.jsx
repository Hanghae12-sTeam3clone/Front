import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import styled from "styled-components";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { signUp } from "../api/sign";

const SignUp = ({ show, onHide }) => {
  const navigate = useNavigate();

  const [usernameInput, setUsernameInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const regUsername = /^[a-z0-9]{4,10}$/;
  const regNickname = /^[ㄱ-ㅎ|가-힣A-Za-z0-9]{2,10}$/;
  const regPassword = /^[a-zA-Z0-9\\d`~!@#$%^&()-_=+]{8,24}$/;

  const { mutate } = useMutation(signUp, {
    onSuccess: (response) => {
      if (response) {
        alert("회원가입 성공");
        onHide();
        // LoginOn();
        // LoginOn();
        // navigate("/");
      }
    },
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "username")
      !regUsername.test(value)
        ? setUsernameInput("올바른 이메일 주소가 아닙니다.")
        : setUsernameInput("");

    if (name === "nickname")
      !regNickname.test(value)
        ? setNicknameInput("닉네임은 2-10자 이내 입니다.")
        : setNicknameInput("");

    if (name === "password")
      !regPassword.test(value)
        ? setPasswordInput("비밀번호가 너무 짧네요! 8자 이상 입력하세요.")
        : setPasswordInput("");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // if (
    //   // user.username.trim() === "" ||
    //   // user.nickname.trim() === "" ||
    //   // user.password.trim() === ""
    // ) {
    //   alert("모든 항목을 입력해주세요.");
    //   return;
    // }
    console.log("여기왔음");
    const userData = {
      email: usernameInput,
      nickname: nicknameInput,
      password: passwordInput,
    };
    mutate(userData);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Pinterest에 오신 것을 환영합니다
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="이메일"
                onChange={(e) => setUsernameInput(e.target.value)}
                name="username"
                value={usernameInput}
              />
              <Form.Label>{usernameInput}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="닉네임"
                onChange={(e) => setNicknameInput(e.target.value)}
                name="nickname"
                value={nicknameInput}
              />
              <Form.Label>{nicknameInput}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={(e) => setPasswordInput(e.target.value)}
                name="password"
                value={passwordInput}
              />
              <Form.Label>{passwordInput}</Form.Label>
            </Form.Group>
            <Button
              variant="danger"
              type="submit"
              className="my-3"
              style={{
                backgroundColor: "#ef1717",
                borderColor: "#ef1717",
                width: "100%",
              }}
            >
              계속하기
            </Button>
            <StOr>또는</StOr>
            <Button
              variant="info"
              type="button"
              style={{
                backgroundColor: "#176BEF",
                borderColor: "#176BEF",
                width: "100%",
                margin: "5px",
              }}
            >
              Facebook으로 계속하기
            </Button>
            <Button
              variant="light"
              style={{ borderColor: "#ebebeb", width: "100%" }}
            >
              Google로 계속하기
            </Button>
            {/* <Text>계속 진행하면 Pinterest 서비스 약관에 동의하고 개인정보 보호정책을 읽었음을 인정하는 것으로 간주됩니다. </Text> */}
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignUp;

const StOr = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin: 10px 0 5px;
`;
