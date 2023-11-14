import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100%;
  background-color: var(--color-primary);

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 110px;
    padding: .8125rem 1.375rem;
  }

  .btn__close {
    background-color: transparent;
    border: none;
    border-radius: 50%;
  }

  footer {
    position: fixed;
    bottom: 0;
  }

  .total__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2rem;
  }

  .btn__buy {
    border: none;

    font-size: 1.75rem;
    font-weight: 700;

    padding: 2rem 8.52rem;
    
    color: var(--color-white);
    background-color: var(--color-black);
  }
`

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  
  list-style: none;
  gap: 1.125rem;
`