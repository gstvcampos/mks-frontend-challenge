import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
    transform: rotate(360deg)
    }
`;
export const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 5rem;
  height: 100vh;

  .logo > h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  .logo > h3 {
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--color-primary);
  }
`;

export const StyledLoadingSpinner = styled.div`
  width: 50px;
  height: 50px;

  border: 10px solid var(--color-primary);
  border-top: 10px solid gray;
  border-radius: 50%;

  animation: ${spinnerAnimation} 1.5s linear infinite;
`;
