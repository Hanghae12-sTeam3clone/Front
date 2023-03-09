import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pin from "./Pin";
import { getPinList } from "../api/main/mainapi";
import { useInfiniteQuery, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import instance from "../api/axios";

export default function SearchPins() {
  const queryclient = useQueryClient();
  const { keyword } = useParams();
  console.log(keyword);

  // // console.log(keyword);
  // useEffect(() => {
  //   setTemps([]);
  // }, [keyword]);
  const SIZE = 10;
  const [temp, setTemps] = useState([]);

  //무한스크롤 스크롤링
  const [page, setPage] = useState(0);
  function handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log(scrollHeight);
      console.log("왜안됨?");
      setPage(page + 1);
      console.log("p", page);
      return fetchNextPage();
    }
  }
  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () =>
      // 끝나면 scroll event listener 제거해서 계~속 더 못 내리게
      {
        window.removeEventListener("scroll", handleScroll);
      };
  });

  const fetchProjects = async ({ pageParam = 0 }) => {
    const res = await instance.get("/pins/search", {
      params: {
        keyword,
        page: pageParam,
        size: SIZE,
      },
    });
    console.log("res", res);

    return {
      lists: res.data,
      offset: pageParam,
      isLast: false,
    };
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["searchpins"], fetchProjects, {
    getNextPageParam: (lastpage, pages) => {
      console.log("getnextPageParmr : ", lastpage, pages);
      return lastpage.offset + 1;
    },
    onSuccess: (response) => {
      console.log("onsucc", response.pages);
      setTemps([...temp, ...response.pages[response.pages.length - 1].lists]);
    },
    onError: (error) => {
      console.log("error", error);
      return;
    },
    staleTime: 0,
    cacheTime: 0,
  });

  console.log("temp", temp);

  // console.log("ss", searchResults);
  // console.log("여긴가?");

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>{isError}</p>;
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
  /* display: flex; */
  margin: 100px auto;
  width: 80%;
  /* justify-content: center; */
  /* align-items: center; */
`;
