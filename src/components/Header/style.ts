import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 100vw;
  height: 110px;
  display: flex;
  align-items: center;
  background-color: var(--color-primary);

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .flexbox {
    height: 90px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 200px;
  }

  .logo {
    display: flex;
    align-items: end;
    gap: 0.5rem;
  }

  a {
    background-color: var(--color-white);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 45px;
    width: 80px;
    border-radius: 8px;
  }

  a > span {
    font-size: 1.125rem;
    font-weight: 700;

    color: var(--color-black);
  }
`;
