import React from "react";
import styled from "styled-components";
export default function MyProfile() {
  return (
    <StProfileDiv>
      <StImg
        src="https://i.pinimg.com/280x280_RS/da/5b/71/da5b71fd8f7dd1a9fe030c825a754620.jpg"
        alt=""
      />
      <h1>Nickname</h1>
      <p>id</p>
      <div>
        <button>공유</button>
        <button>프로필 수정</button>
      </div>
    </StProfileDiv>
  );
}

const StProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StImg = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-top: 20px;
`;
