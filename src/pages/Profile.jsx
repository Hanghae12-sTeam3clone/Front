import React from "react";
import styled from "styled-components";
import MyBoards from "../components/profile/MyBoards";
import MyProfile from "../components/profile/MyProfile";
import Header from "./Header";

export default function Profile() {
  return (
    <>
      <StFlexDiv>
        <Header />
        <MyProfile />
        <MyBoards />
      </StFlexDiv>
    </>
  );
}

const StFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
