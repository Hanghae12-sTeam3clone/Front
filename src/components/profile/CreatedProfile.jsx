import React from "react";
import styled from "styled-components";
import Pin from "../Pin";

export default function CreatedProfile() {
  return (
    <CreatePinContainer>
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="medium" />
      <Pin size="medium" />
      <Pin size="small" />
      <Pin size="large" />
      <Pin size="small" />
    </CreatePinContainer>
  );
}

const CreatePinContainer = styled.div`
  margin-top: 50px;
  padding: 0;
  width: 80%;
  min-width: 510px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  justify-content: center;
  /* align-items: center; */
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: 10px;
`;
