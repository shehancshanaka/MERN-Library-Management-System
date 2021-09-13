import styled from "styled-components";
export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  height: 100%;
`;
export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  margin: 0.1em;
  font-size: 1em;
  border: ${(props) => (props.active ? "" : "1px solid #ccc")};
  border-bottom: none;
  background-color: ${(props) => (props.active ? "#039be5" : "#fff")};
  height: 3em;
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;

  :hover {
    background-color: #4fc3f7;
  }
`;
export const TabContend = styled.div`
  border: 0.25em solid #039be5;
  border: 0.5em solid #039be5;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  min-height: 80vh;
`;

export const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")};
`;

export const TabsContainer = styled.div`

overflow :hidden;
background:#fff;
width:100%;
height :100%;
`;
export const TabButtonContainer = styled.div`
display :flex;
>*{

flex :1 1 0;
max-width :10em;

}

`;

