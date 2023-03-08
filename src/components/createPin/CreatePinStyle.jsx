import styled from 'styled-components';

export const PinWriteBox = styled.form`
  width: 100%;
  height: 91%;
  margin-top: 42.5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.1);
`;

export const AddPinContainer = styled.div`
  padding: 40px;
  width: 880px;
  height: 650px;
  margin-top: -50px;
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  display: flex;
  background-color: white;
`;

export const PinIconContainer = styled.div`
  width: 32px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  background-color: rgba(239, 239, 239, 0);
  &:hover {
    background-color: rgba(239, 239, 239, 1);
  }
`;

export const UploadImgContainer = styled.div`
  padding: 15px;
  width: 300px;
  height: 470px;
  border-radius: 8px;
  background-color: #efefef;
  .dotted-border {
    width: 102%;
    height: 102%;
    border-radius: 8px;
    border: 2px dashed #dadada;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const DragAndClick = styled.div`
  font-size: 20px;
  margin-top: 15px;
`;

export const Recommendation = styled.div`
  font-size: 15px;
  color: gray;
  margin-top: 35px;
  height: 30px;
  text-align: center;
  display: block;
  line-height: 200px;
`;

export const ShowPin = styled.div`
  width: 252px;
  height: 512px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: none;
`;

export const PinImage = styled.div`
  position: relative;
  top: -92%;
  max-width: 100px;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSide = styled.div`
  padding: 20px;
  width: 311px;
  height: 510px;
`;

export const LeftSection1 = styled.div`
  width: 100%;
  height: 8%;
`;

export const LeftSection2 = styled.div`
  padding: 0px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #upload-img-label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  #upload-img-label input {
    width: 100%;
    height: 5%;
    opacity: 0;
  }
`;

export const LeftSection3 = styled.div`
  width: 120%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  .save-from-site {
    width: 271px;
    height: 48px;
    border-radius: 22px;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color: #efefef;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const RightSide = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const RightSection1 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Selectboard = styled.div`
  width: 236px;
  height: 40px;
  display: flex;
  select {
    width: 70%;
    height: 100%;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: none;
    font-size: 16px;
    background-color: #efefef;
  }
`;

export const SavePin = styled.button`
  width: 30%;
  height: 100%;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: #e60023;
  cursor: pointer;
`;

export const RightSection2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  input {
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 2px solid #c6c6c6;
    outline: none;
    font-size: 16px;
    background-color: transparent;
    margin-left: 30px;
  }
  input:focus {
    border-bottom: 1px solid blue;
  }
  .input-title::placeholder {
    font-size: 36px;
    font-weight: 700;
  }
`;

export const AddSubTextButton = styled.div`
  width: 152px;
  height: 48px;
  border-radius: 22px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: #efefef;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const RendingPageLink = styled.div`
  width: 100%;
  margin-top: 220px;
`;