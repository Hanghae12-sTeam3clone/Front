import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import styled from "styled-components";
import { Modal, Button, Form, Container } from "react-bootstrap";

const LogIn = ({ show, onHide }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="이메일" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>
            <StSm>비밀번호를 잊으셨나요?</StSm>
            <Button
              block
              variant="danger"
              type="button"
              className="my-3"
              style={{
                backgroundColor: "#ef1717",
                borderColor: "#ef1717",
                width: "100%",
              }}
            >
              로그인
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
            {/* <StSignUp>이미 회원이신가요?</StSignUp>
            <Link to={/Signup}><StSm>로그인하기</StSm></Link> */}
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default LogIn;

const StOr = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin: 10px 0 5px;
`;

const StSm = styled.div`
  width: 100%;
  text-align: start;
  font-weight: bold;
  font-size: 13px;
  margin: 5px 0px 5px;
`;

// const StSignUp = styled.div`
//   width: 100%;
//   text-align: center;
//   font-weight: bold;
//   font-size: 13px;
//   margin: 5px 0px 5px;
// `;
