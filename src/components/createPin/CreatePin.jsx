import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { upload } from "../../api/create";

import {
  PinWriteBox,
  AddPinContainer,
  PinIconContainer,
  UploadImgContainer,
  ShowPin,
  PinImage,
  LeftSide,
  LeftSection1,
  LeftSection2,
  LeftSection3,
  RightSide,
  RightSection1,
  Selectboard,
  SavePin,
  RightSection2,
  DragAndClick,
  Recommendation,
  AddSubTextButton,
  RendingPageLink,
} from "./CreatePinStyle";

const CreatePin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const uploadMutation = useMutation(upload, {
    onSuccess: (response) => {
      navigate("/");
    },
    onError: (response) => {},
  });

  const saveImgFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    const payload = {
      title: formData.get("title"),
      content: formData.get("content"),
      image: formData.get("image"),
    };
    uploadMutation.mutate(payload);

    for (const keyValue of formData) console.log(keyValue);
  };

  return (
    <PinWriteBox onSubmit={handleSubmit}>
      <AddPinContainer>
        <LeftSide>
          <LeftSection1>
            <PinIconContainer>
              <svg
                height="18"
                width="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
                aria-label
                role="img"
              >
                <path
                  d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
                  fill="#767676"
                ></path>
              </svg>
            </PinIconContainer>
          </LeftSection1>
          <LeftSection2>
            <label
              htmlFor="upload-img"
              id="upload-img-label"
              style={{ display: "block" }}
            >
              <UploadImgContainer>
                <div className="dotted-border">
                  <PinIconContainer>
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      aria-label="????????? ?????? ????????? ??????"
                      role="img"
                    >
                      <path
                        d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"
                        fill="#767676"
                      ></path>
                    </svg>
                  </PinIconContainer>
                  <DragAndClick>
                    ?????????????????? ???????????? ???<p>??????</p>
                  </DragAndClick>
                  <Recommendation>
                    ?????? ??????: 20MB ????????? ????????? .jpg ??????
                  </Recommendation>
                </div>
              </UploadImgContainer>
              <PinImage>
                <input
                  type="file"
                  name="upload-img"
                  id="upload-img"
                  accept="image/*"
                  aria-hidden="false"
                  tabIndex="0"
                  onChange={saveImgFile}
                />
                {preview ? (
                  <img
                    src={preview}
                    style={{
                      width: "300px",
                      height: "550px",
                      position: "absolute",
                      marginLeft: "200px",
                      marginTop: "200px",
                    }}
                  />
                ) : null}
              </PinImage>
            </label>
            <ShowPin></ShowPin>
          </LeftSection2>
          <LeftSection3>
            <div className="save-from-site">??????????????? ??????</div>
          </LeftSection3>
        </LeftSide>

        <RightSide>
          <RightSection1>
            <Selectboard>
              <select defaultValue="Select" name="pin_size" id="pin-size">
                <option>select</option>
              </select>
              <SavePin type="submit" value="Upload">
                ??????
              </SavePin>
            </Selectboard>
          </RightSection1>
          <RightSection2>
            <input
              className="input-title"
              placeholder="?????? ??????"
              type="text"
              value={title}
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="input-content"
              placeholder="??????????????? ???????????? ?????? ?????? ????????? ?????????  ????"
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={200}
            />
            <AddSubTextButton>?????? ????????? ??????</AddSubTextButton>
            <RendingPageLink>
              <input
                placeholder="?????? ????????? ?????? ??????"
                type="text"
                id="pin-destination"
              />
            </RendingPageLink>
          </RightSection2>
        </RightSide>
      </AddPinContainer>
    </PinWriteBox>
  );
};
export default CreatePin;
