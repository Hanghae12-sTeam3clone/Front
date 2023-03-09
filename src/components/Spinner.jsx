import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${rotate} 1s ease-in-out infinite;
`;

export default Spinner;
