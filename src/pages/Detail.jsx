import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getPinDetail } from "../api/detail/detail";
import styled from "styled-components";
import CommentList from "../components/detail/CommentList";
import CommentInput from "../components/detail/CommentInput";
import DetailPin from "../components/detailPin/DetailPin";


export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailpin, setDetailpin] = useState({});
  const image = new Image();
  // image.src = data.filePath;

  //   useEffect(() => {
  //     const response = getPinDetail(id);
  //     setDetailpin(response);
  //   }, [id]);

    // const { isLoading, isError, data } = useQuery("pindetail", getPinDetail, {});

  //   if (isLoading) return <p>Loading...</p>;
  //   if (isError) return <p>{isError}</p>;
  

  return (
    // <StDiv>
    //   <StPrev onClick={() => navigate("/")}>이전으로</StPrev>

    //   <StDetailDiv>
    //     {/* <StImagePin src={image.src}></StImagePin> */}
    //     <StPinInfoDiv>
    //       <StHeaderDiv>
    //         <button>asdf</button>
    //         <button>저장</button>
    //       </StHeaderDiv>
    //       <StBodyDiv>
    //         {/* 하나의 component로 */}
    //       <h1>data.title</h1>
    //         <p>data.conetnt</p>
    //         <div>
    //           <h1>data.nickname</h1>
    //         </div>
    //       </StBodyDiv>
    //       <StCommentDiv>
    //         {/* 댓글 리스트 컴포넌트 */}
    //         <CommentList />

    //         <StCommentChildDiv>
    //           <CommentInput />
    //         </StCommentChildDiv>
    //       </StCommentDiv>
    //     </StPinInfoDiv>
    //   </StDetailDiv>
    // </StDiv>
    <DetailPin />
  );
}

const StPrev = styled.button`
  position: fixed;
  left: 20px;
  top: 100px;
`;

const StDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StDetailDiv = styled.div`
  display: flex;
  width: 1000px;
  border: none;
  margin-top: 50px;
  height: auto;
  border-radius: 40px;
`;

const StImagePin = styled.img`
  width: 500px;
  height: auto;

  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const StPinInfoDiv = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  width: 500px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  /* background-color: tomato; */
  min-height: 500px;
  border: 1px solid black;
`;
const StHeaderDiv = styled.div`
  margin-top: 32px;
  display: flex;
  width: 80%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

const StBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const StCommentDiv = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StCommentChildDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: blue;
  color: white;
  border-bottom-right-radius: 40px;
`;
