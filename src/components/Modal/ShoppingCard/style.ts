import styled from "styled-components"

export const StyledLi = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  width: 400px;

  margin: 0 auto;

  background-color: var(--color-white);
  border-radius: .5rem;

  .btn__close {
    position: absolute;
    top: -15px;
    right: -15px;
  }

  img {
  max-width: 100%;
  max-height: 100%;
  }

  .div__img {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    height: 90px;
  }

  .div__name{
    width: 120px;
  }

  .qtd__container {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 100px;
  }

  .qtd__item{
    display: flex;
    justify-content: space-around;

    width: 50px;
    
    border: .0187rem solid var(--color-gray-300);
    border-radius: .25rem;
  }

  .btn__remove {
    width: 100%;
    border: none;
    border-radius: .25rem;
    background-color: var(--color-white);
  }

  span {
    width: 100%;
    text-align: center;
    font-size: .625rem;
    font-weight: 400;
  }

  .btn__add {
    width: 100%;
    border: none;
    border-radius: .25rem;
    background-color: var(--color-white);
  }
`