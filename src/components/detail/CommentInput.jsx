import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSend } from "react-icons/ai";

export default function CommentInput({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ nickname: "", text });
    setText("");
  };

  return (
    <div>
      <div>
        <CgProfile />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="댓글 추가"
            value={text}
            onChange={handleChange}
          />
          <button type="submit">
            <AiOutlineSend />
          </button>
        </div>
      </form>
    </div>
  );
}
