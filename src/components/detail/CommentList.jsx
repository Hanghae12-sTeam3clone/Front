import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPinDetailComment } from "../../api/detail/detail";
import styled from "styled-components";
import Comments from "./Comments";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

export default function CommentList({ comments, setComments }) {
  const { id } = useParams();

  // useEffect(() => {
  //   const response = getPinDetailComment(id);
  //   setComments(response);
  // }, [id]);

  // 댓글 수정
  const handleUpdate = (updated) =>
    setComments(
      comments.map((i) => (i.nickname === updated.nickname ? updated : i))
    );

  // 댓글 삭제
  const handleDelete = (deleted) =>
    setComments(
      comments.filter((comment) => comment.nickname !== deleted.nickname)
    );

  return (
    <CommentDiv>
      <div>
        {/* <span>댓글 {comments.length}개 </span> */}
        {/* <button onClick={isOpen ? <VscChevronDown /> : <VscChevronRight />} /> */}
      </div>
      {comments.map((comment) => (
        <Comments
          key={comment.id}
          item={comment}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </CommentDiv>
  );
}

const CommentDiv = styled.div`
  width: 80%;
  height: 100%;
`;
