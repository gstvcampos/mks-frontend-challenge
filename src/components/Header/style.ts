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

  button {
    background-color: var(--color-white);

    :hover {
      filter: grayscale(100%) sepia(100%) hue-rotate(113deg);
    }
  }

  a {
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;

    height: 60px;
    width: 60px;
    padding-left: 1rem;

    margin-right: 1rem;
  }

  a > span {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 0.875rem;
    font-weight: 900;

    padding: 0.3125rem;
    border-radius: 0.4375rem;

    color: var(--color-white);
    background-color: var(--color-primary);
  }
`;
