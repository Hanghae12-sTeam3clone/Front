import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

export default function MyBoards() {
  const param = useParams();
  return (
    <Stdiv>
      <div>
        <Link to={`/profile/${param.id}/created`}>생성됨</Link>
        <Link to={`/profile/${param.id}/saved`}>저장됨</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </Stdiv>
  );
}

const Stdiv = styled.div`
  max-width: 90%;
  text-align: center;
  margin: 20px;
  padding: 20px;
`;
