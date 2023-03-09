import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsSuitHeart } from "react-icons/bs";

export default function Comments({ item, onUpdate, onDelete }) {
  const { nickname, text } = item;
  const handleUpdate = (e) => {
    onUpdate({ ...item, text });
  };
  const handleDelete = () => onDelete(item);

  return (
    <div>
      <CgProfile />
      {nickname}
      {text}
      <div>
        3h 답변
        <BsSuitHeart />
        <button onClick={handleUpdate}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
}
