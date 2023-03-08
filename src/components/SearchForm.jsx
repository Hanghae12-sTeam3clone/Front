import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { useQueryClient, useQuery, qu } from "react-query";
import { getSearchPins } from "../api/main/search";
import { useNavigate } from "react-router-dom";
import instance from "../api/axios";

export default function SearchForm() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const queryClient = useQueryClient();

  const handleKeyDown = async (event) => {
    if (event.keyCode === 13) {
      console.log("Enter key pressed");

      // 여기에 엔터를 눌렀을 때 실행할 코드를 작성합니다.
      // const { data } = await instance.get(`/pins/search`, {
      //   params: {
      //     keyword: searchInput,
      //   },
      // });
      // const { data } = await instance2.get(`/photos/random`, {
      //   params: {
      //     client_id: process.env.REACT_APP_MY_KEY,
      //     count: 20,
      //     query: searchInput,
      //   },
      // });

      // queryClient.setQueryData("searchResults", data);
      // const { data } = useQuery(["searchResults", searchInput], getSearchPins, {
      //   cacheTime: 1000,
      // });
      // setSearchInput("");
      // queryClient.invalidateQueries("searchpins");
      // queryCache.removeQueries("searchpins");
      navigate(`/search/pins/${searchInput}`);
    }
  };
  function handleClear() {
    setSearchInput("");
  }

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Form.Control
        className="m-auto w-75"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        value={searchInput}
        type="text"
        placeholder="Search"
        style={{
          width: "100%",
          padding: "12px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "24px",
          backgroundColor: "#efefef",
          color: "#333",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      />
      {searchInput.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "15%",
            transform: "translateY(-50%)",
          }}
        >
          <MdCancel
            style={{ color: "#aaa", cursor: "pointer" }}
            onClick={handleClear}
          />
        </div>
      )}
    </div>
  );
}
