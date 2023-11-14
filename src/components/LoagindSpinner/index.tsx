import { StyledLoadingSpinner, StyledSpinnerContainer } from "./style";


export const LoadingSpinner = () => {
  return (
    <StyledSpinnerContainer>
        <div className="logo">
          <h2>MKS</h2>
          <h3>Sistemas</h3>
        </div>
      <StyledLoadingSpinner></StyledLoadingSpinner>
    </StyledSpinnerContainer>
  );
};
