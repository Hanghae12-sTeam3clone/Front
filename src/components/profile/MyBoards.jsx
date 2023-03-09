import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

export default function MyBoards() {
  const param = useParams();
  return (
    <Stdiv>
      <div>
        <StLink to={`/profile/${param.id}/created`}>생성됨</StLink>
        <StLink to={`/profile/${param.id}/saved`}>저장됨</StLink>
      </div>

      <StPinDiv>
        <Outlet />
      </StPinDiv>
    </Stdiv>
  );
}

const Stdiv = styled.div`
  width: 90%;
  text-align: center;
  margin: 20px;
  padding: 20px;
`;

const StPinDiv = styled.div`
  width: 90%;
`;

const StLink = styled(Link)`
  text-decoration-line: none;
  margin: 20px;
  color: black;
  font-weight: bold;
  &:hover {
    color: gray;
  }
`;
