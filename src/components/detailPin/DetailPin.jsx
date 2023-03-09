import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  DivSection,
  DivDetailBox,
  DivLeftBox,
  DivRightBox,
  DivImageBox,
  DivInfoBox,
  DivIconBox,
  DivButton,
  DefaultIcon,
  DivProfileImageBox,
} from "./DetailPinStyle";
import {
  deleteLike,
  getPinDetail,
  likeSwitch,
  removeDetail,
  switchDetail,
} from "../../api/detail/detail";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {  FaHeart, FaRegHeart } from "react-icons/fa";

export default function DetailPin() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [index, setIndex] = useState("0");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("pindetail", () =>
    getPinDetail(id)
  );

  const switchMutation = useMutation(switchDetail, {
    onSuccess: () => {
      queryClient.invalidateQueries("pindetail");
    },
  });

    const deleteMutation = useMutation(removeDetail, {
      onSuccess: () => {
        navigate("/")
        queryClient.invalidateQueries("pindetail");

      },
    });

  const likeswitchMutation = useMutation(likeSwitch, {
    onSuccess: () => {
      queryClient.invalidateQueries("pindetail");
    },
  });

  const deleteLikeMutation = useMutation(deleteLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("pindetail");
    },
  });

  const onSelect = (e) => {
    e.preventDefault();
    setIndex(e.target.value);
    if (e.target.value === "1") {
      setShow(true);
    }
  };

    //수정 버튼
    const changeButton = (data) => {
      const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);

      const payload = {
        id:data,
        title:formData.get("title"),
        content:formData.get("content"),
      };
      console.log(payload)
      for (const keyValue of formData) console.log(keyValue);
      switchMutation.mutate(payload);
      setShow(false)     
    }
   //삭제버튼
    const deleteButton = (data) => {
      const payload = {
        id: data,
      }
      deleteMutation.mutate(payload);
      setShow(false)     
      console.log(payload)
    }

  const likeButton = (data) => {
    const payload = {
      id: data.id,
    };
    console.log(payload);
    if (!data.like) {
      likeswitchMutation.mutate(payload);
    } else {
      deleteLikeMutation.mutate(payload);
    }
  };

  const handleClose = () => setShow(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{isError}</p>;

  return (
  <DivSection>
    <StPrev to ={"/"}> ← &nbsp;&nbsp;추천</StPrev>
          <>
        <DivDetailBox  key={data.data.id}>
          <DivLeftBox style={{marginLeft: '0'}}>
            <DivImageBox >
              <img src={data.data.imageDetail}/>
            </DivImageBox>
          </DivLeftBox>
          <DivRightBox>
            <DivInfoBox>
              <div className="headerbox">
                <div>
                  <DivIconBox>
                  {data.data.nickname == localStorage.getItem("nickname")? 
                  <StyledSelect value={index} onChange={onSelect} >
                        <option value="0">이미지 다운로드</option>
                        <option value="1">핀 수정</option>
                        <option value="2">핀 신고 </option>
                        <option value="3">핀 임베드 코드 가져오기 </option>
                      </StyledSelect>
                    ) : (
                      <StyledSelect value={index} onChange={onSelect}>
                        <option value="0">이미지 다운로드</option>
                        <option value="4">핀 숨기기</option>
                        <option value="2">핀 신고 </option>
                        <option value="3">핀 임베드 코드 가져오기 </option>
                      </StyledSelect>
                    )}
                  </DivIconBox>
                  <DefaultIcon>
                    <svg
                      height="20"
                      width="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      aria-label
                      role="img"
                    >
                      <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"></path>
                    </svg>
                  </DefaultIcon>
                  <DefaultIcon s>
                    <svg
                      height="20"
                      width="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      aria-label
                      role="img"
                    >
                      <path d="M10.52 3.11a2 2 0 013.59 0l2.06 4.17c.02.06.08.1.15.11l4.6.67a2 2 0 011.1 3.41l-3.32 3.25a.2.2 0 00-.06.17l.78 4.58a2 2 0 01-2.9 2.11l-4.11-2.16a.2.2 0 00-.19 0l-4.11 2.16a2 2 0 01-2.9-2.1l.78-4.59a.2.2 0 00-.06-.17l-3.32-3.25a2 2 0 011.1-3.41l4.6-.67a.2.2 0 00.15-.1zm3.9 5.15l-1.75-3.53a.4.4 0 00-.71 0L10.2 8.26a2 2 0 01-1.5 1.1l-3.9.56a.4.4 0 00-.23.69l2.83 2.75a2 2 0 01.57 1.77L7.31 19a.4.4 0 00.58.42l3.5-1.83a2 2 0 011.86 0l3.48 1.83a.4.4 0 00.59-.42l-.67-3.88a2 2 0 01.57-1.77l2.83-2.75a.4.4 0 00-.22-.69l-3.9-.56a2 2 0 01-1.51-1.1z"></path>
                    </svg>
                  </DefaultIcon>
                </div>
                <div>
                  <DivButton>저장</DivButton>
                </div>
              </div>

              <div className="titlebox">{data.data.title}</div>
              <div className="contentbox">{data.data.content}</div>
              <div className="profilebox">
                <div>
                  <DivProfileImageBox size="48" />
                </div>
                <div>
                  <p className="username">{data?.nickname}</p>
                  <p>좋아요 {data?.data.likeCount}명</p>
                </div>
                <StLikeButton onClick={() => likeButton(data?.data)}>
                  {data?.data.like ? <FaHeart /> : <FaRegHeart />}
                </StLikeButton>
              </div>
            </DivInfoBox>
          </DivRightBox>
        </DivDetailBox>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>이 핀 수정하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>제목</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>설명</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={(e) => deleteButton(data?.data.id)}
            >
              삭제
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              취소
            </Button>
            <Button
              variant="primary"
              onClick={(e) => changeButton(data?.data.id)}
            >
              저장
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </DivSection>
  );
}

const StPrev = styled(Link)`
  position: fixed;
  left: 30px;
  top: 100px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 800;
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

 const StLikeButton = styled.span`
 margin-top: 10px;
  font-size: 19px;
  color: red;
  cursor: pointer;
`;

const StyledSelect = styled.select`
  appearance: none;
  padding: 0.5em;
  border: none;
  font-size: 1em;
  color: #333;
`;
