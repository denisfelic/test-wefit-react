import styled from "styled-components";

const LoadingSpinnerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LoadingSpinner() {
  return (
    <LoadingSpinnerContainer>
      <img src="/public/Loader.png" className="loading-animation-icon" />
    </LoadingSpinnerContainer>
  );
}
