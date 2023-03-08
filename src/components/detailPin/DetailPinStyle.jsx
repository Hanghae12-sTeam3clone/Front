import styled from "styled-components";

export const DivSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`

export const DivDetailBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 508px;
  max-width: 1020px;
  width: 1020px;
  box-shadow: 0px 0px 15px 0px #ccc;
  border-radius: 32px; 
`

export const DivLeftBox = styled.div`
  min-width: 508px;
  max-width: 508px;
`

export const DivImageBox = styled.div`
  max-width: 508px;
  max-height: 700px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  
  padding: 20px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px 0 0 15px;
  }
`

export const DivRightBox = styled.div`
  min-width: 508px;
  max-width: 508px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
`

export const DivInfoBox = styled.div`
  width: 444px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .headerbox{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    div{
      display: flex;
      align-content: center;
    }
  }
  .writerbox{
    width: 100%;
    font-size: 21px;
    span{
      font-weight: 600;
    }
  }
  .titlebox{
    width: 100%;
    font-size: 36px;
    font-weight: 600;
  }
  .contentbox{
    font-size: 12px;
    font-weight: 400;
  }
  .profilebox{
    display: flex;
    gap: 5px;
    align-content: center;
    font-size: 14px;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      .username{
      font-weight: 600;
      }
    }
  }
`


export const DivIconBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  &:hover{
    background-color: rgb(233, 233, 233);
  }  
`

export const DivButton = styled.button`
  display: flex;
  align-items: center;
  height: 43px;
  padding: 12px 16px;
  border: none;
  border-radius: 24px;
  background-color: red;
  font-family: segoe-ui;
  font-size: 16px;
  font-weight: 600;
  color: white;
  &:hover{
    background-color: #6e242d
  }
`
export const DefaultIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  &:hover{
    background-color: rgb(233, 233, 233);
  }  
`
export const DivProfileImageBox = styled.div`
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`