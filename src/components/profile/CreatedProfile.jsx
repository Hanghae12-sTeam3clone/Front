import React from "react";
import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMyCreatePin } from "../../api/profile/profile";
import Pin from "../Pin";

export default function CreatedProfile() {
  const { isLoading, isError, data: temp } = useQuery("mypins", getMyCreatePin);
  console.log("temptemptemptemp", temp);

  return (
    <StDiv>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          250: 1,
          500: 2,
          750: 3,
          1000: 4,
          1250: 5,
          1500: 6,
          1750: 7,
          2000: 8,
        }}
      >
        <Masonry gutter="10px">
          {temp?.map((item) => {
            return <Pin item={item}></Pin>;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </StDiv>
  );
}

const StDiv = styled.div`
  /* margin: 100px auto; */
  width: 80%;
`;

const CreatePinContainer = styled.div`
  margin-top: 50px;
  padding: 0;

  width: 80%;
  /* min-width: 510px; */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  justify-content: center;
  /* align-items: center; */
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: 10px;
`;
