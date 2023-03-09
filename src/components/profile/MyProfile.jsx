import React from "react";
import styled from "styled-components";
export default function MyProfile() {
  return (
    <StProfileDiv>
      <StImg
        src="https://i.pinimg.com/280x280_RS/da/5b/71/da5b71fd8f7dd1a9fe030c825a754620.jpg"
        alt=""
      />
      <h1>{localStorage.getItem("nickname")}</h1>
      <StBtnDiv>
        <StBtn>공유</StBtn>
        <StBtn>프로필 수정</StBtn>
      </StBtnDiv>
    </StProfileDiv>
  );
}

const StProfileDiv = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StBtnDiv = styled.div`
  margin-top: 20px;
`;
const StImg = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-top: 20px;
`;

const StBtn = styled.button`
  /* position: absolute; */
  margin-left: 10px;
  height: 43px;
  padding: 11px 20px;
  border: none;
  border-radius: 24px;
  background-color: black;
  font-size: 16px;
  font-weight: 600;
  color: white;
  &:hover {
    background-color: #6e242d;
  }
`;
