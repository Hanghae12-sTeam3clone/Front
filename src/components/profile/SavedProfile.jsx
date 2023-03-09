import React from "react";
import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { getMySavePin } from "../../api/profile/profile";
import Pin from "../Pin";

export default function SavedProfile() {
  const {
    isLoading,
    isError,
    data: temp,
  } = useQuery("mysavepin", getMySavePin);

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
