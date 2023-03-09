import React, { useEffect, useState, Suspense } from "react";
import styled from "styled-components";
import Pin from "./Pin";
import { getPinList } from "../api/main/mainapi";
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Spinner from "./Spinner";
import { useInfiniteScroll } from "./scroll/useInfiniteScroll";
import axios from "axios";
import instance from "../api/axios";

import { useInView } from "react-intersection-observer";

export default function MainLayout() {
  const SIZE = 10;
  const [isnext, setIsnext] = useState(true);
  // const [ref, inView] = useInView();
  // console.log(ref, inView);
  // const page = useInfiniteScroll();
  // console.log(page);

  const [pins, setPins] = useState([]);
  const [temp, setTemps] = useState([]);
  const [isNextPage, setIsNextPage] = useState(true);

  //무한스크롤 스크롤링
  const [page, setPage] = useState(0);
  function handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight * 0.95) {
      setPage(page + 1);
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
    const res = await instance.get("/pins", {
      params: {
        page: pageParam,
        size: SIZE,
      },
    });
    // console.log("onsucc", response.pages);
    setTemps([...temp, ...res.data.content]);

    return {
      lists: res.data,
      offset: pageParam,
      isLast: res.data.last,
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
  } = useInfiniteQuery(["pins"], fetchProjects, {
    getNextPageParam: (lastpage, pages) => {
      if (!lastpage.isLast) return lastpage.offset + 1;
      return undefined;
    },
    onSuccess: (response) => {},
    onError: (error) => {},
  });

  // useInfiniteQuery({
  //   queryKey: ["projects"],
  //   queryFn: (page) => fetchProjects(page),
  //   getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  // });

  // useEffect(() => {
  //   const getDetailPost = async () => {
  //     const data = await instance.get(`/pins`);
  //     console.log("da", data);
  //     return data;
  //   };
  //   //   if(hasNextPage){
  //   //   getDetailPost().then(result=>{
  //   //     setHasNextPage(result.isnext)
  //   //     setTemps([...temp, ...result])
  //   //   });
  //   // }
  //   getDetailPost().then((result) => setTemps([...temp, ...result.data]));
  // }, [page]);
  // console.log("temp", temp);

  // const [page, setPage] = useState(1);
  // console.log(page);
  // const handleScroll = () => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     setPage(page + 1);
  //   }
  // };
  // useEffect(() => {
  //   // scroll event listener 등록
  //   window.addEventListener("scroll", handleScroll);
  //   return () =>
  //     // 끝나면 scroll event listener 제거해서 계~속 더 못 내리게
  //     {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  // });

  // const [datalist, setDatalist] = useState([]);
  // const queryClient = useQueryClient();

  // const { data: searchResults, refetch } = useQuery("searchResults");
  // console.log("searchResults", searchResults);

  // const {
  //   isLoading,
  //   isError,
  //   data: lists,
  // } = useQuery("pins", getPinList, {
  //   onSuccess: (response) => {
  //     console.log(response);
  //     console.log(lists);
  //     // lists === undefined
  //     //   ? setPins([...response])
  //     //   : setPins([...lists, ...response]);
  //   },
  // });
  // console.log("lits", lists);
  // console.log("pins;", pins);

  const renderLoader = () => <Spinner />;
  // const { isLoading, isError, data: lists } = useQuery("pins", unsplash);
  // console.log("lits", lists);
  // const {is}

  // const data = searchResults ? setDatalist(searchResults) : setDatalist(lists);
  // searchResults ? setDatalist(searchResults) : setDatalist(lists);
  // useEffect(() => {
  //   searchResults ? setDatalist(searchResults) : setDatalist(lists);
  //   console.log("ll", datalist);
  // }, [datalist]);
  // useEffect(() => {
  //   console.log("오긴옴?");
  //   searchResults ? setDatalist(searchResults) : setDatalist(lists);
  // }, [searchResults]);

  // console.log(datalist);

  // if (isLoading) return <Spinner />;
  // if (isError) return <p>{isError}</p>;
  // console.log("여긴가?");
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
            return (
              <Suspense fallback={renderLoader}>
                <Pin item={item}></Pin>
              </Suspense>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      <div style={{ position: "absolute", bottom: "100px" }} />
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
