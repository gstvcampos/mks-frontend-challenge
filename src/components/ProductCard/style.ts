import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 225px;
  height: 300px;

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
    padding: 0.5rem;
  }
  .div__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .div__title > h3 {
    width: 130px;
  }

  .price {
    max-width: 100%;
    border-radius: 8px;
    padding: 0.3rem;
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--color-white);

    background-color: var(--color-gray-200);
  }

  button {
    border-radius: 0px 0px 8px 8px;

    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;
