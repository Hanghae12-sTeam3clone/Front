import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CiSaveDown2 } from "react-icons/ci";
import { useMutation, useQueryClient } from "react-query";
import { postPinSave } from "../api/main/mainapi";

export default function Pin({ item }) {
  const navigate = useNavigate();
  const title = "타이틀입니다.";
  const [ishover, setIsHover] = useState(false);
  const queryclient = useQueryClient();
  const saveMutation = useMutation(postPinSave, {
    onSuccess: () => {
      alert("save 완료");
      // queryclient.invalidateQueries("pins");
    },
  });

  const handleMouseEnter = () => {
    setIsHover(true);
    // console.log(ishover);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const hadleSavePin = (id) => {
    saveMutation.mutate({
      id,
    });
  };
  return (
    <StDiv onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StImage

        src={item.imageMain}
        onClick={() => navigate(`/pins/${item.id}`)}
      />

      {ishover ? (
        <>
          <Btn onClick={() => hadleSavePin(item.id)}>
            {!item.like ? "저장" : "취소"}
          </Btn>
          <StLabel>{item.title}</StLabel>
          <StSaveDiv onClick={() => alert("다운")}>
            <StIcon size={23} />
          </StSaveDiv>
        </>
      ) : null}
      {/* <Btn
        onClick={() => {
          alert("저장");
        }}
      >
        저장
      </Btn>
      <StLabel>{title}</StLabel>
      <StSaveDiv onClick={() => alert("다운")}>
        <StIcon size={23} />
      </StSaveDiv> */}
    </StDiv>
  );
}

const Btn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 43px;
  padding: 10px 16px;
  border: none;
  border-radius: 24px;
  background-color: red;
  font-family: segoe-ui;
  font-size: 16px;
  font-weight: 600;
  color: white;
  &:hover {
    background-color: #6e242d;
  }
`;

const StImage = styled.img`
  width: 100%;
  border-radius: 15px;
  cursor: zoom-in;
`;

const StDiv = styled.div`
  position: relative;
  width: 100%;
  &:hover ${StImage} {
    background-color: black;
    opacity: 0.6;
  }
  border-radius: 15px;
  box-shadow: 24px 13px 24px 4px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 24px 13px 24px 4px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 24px 13px 24px 4px rgba(0, 0, 0, 0.47);
`;

const StLabel = styled.label`
  width: 100px;
  position: absolute;
  top: 10px;
  left: 10px;
  color: black;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StSaveDiv = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #e2e2e2;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
    opacity: 0.8;
  }
`;
const StIcon = styled(CiSaveDown2)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
