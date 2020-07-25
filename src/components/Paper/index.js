import styled from "styled-components";

export const Paper = styled.div`
  padding: 16px 24px;
  box-shadow: 0px 2px 6px #0000000a;
  border: 0.5px solid #cdcdcd;
  border-radius: 2px;
  width: ${(props) => props.width};
  background: ${(props) => props.background || "white"};
  box-sizing: border-box;
  margin: ${(props) => props.margin};

  ${(props) => {
    if (props.pointer) {
      return `
        cursor: pointer;
        &:hover {
          background: #f3f3f3;
        }
      `;
    }
    return "";
  }}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
