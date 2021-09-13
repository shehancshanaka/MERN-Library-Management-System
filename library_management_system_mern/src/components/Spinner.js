import styled from "styled-components";
const SpinningDiv = styled.div`
  border: 16 px solid ${(props) => props.theme.primary.disabled};
  border-top: 16px solid ${(props) => props.theme.primary.main};
  border-radius: 50%;
  width: 5em;
  height: 5em;
  animation: spin 2s liner infinite;
  @keyframes spin {
    0% {
      transform: rotate(0dge);
    }
    100% {
      transform: rotate(360dge);
    }
  }
`;
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Spinner = () => {
  <SpinnerContainer>
    <SpinningDiv />
  </SpinnerContainer>;
};

export default Spinner;