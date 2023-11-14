import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 290px;
  box-shadow: 2px 2px 5px black;

  border-radius: 8px;

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

`