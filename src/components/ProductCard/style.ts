import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 225px;
  height: 320px;

  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;

  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .div__img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
  }

  .div__information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 0.5rem;
    padding: 1.25rem;
  }

  button {
    position: absolute;
    bottom: 0;
  }

`