import styled from "styled-components";

export const ImageIconButton = styled.img`
  cursor: pointer;
  margin: ${(props) => props.margin || "0px 12px"};
`;

export const Button = styled.button`
  border-radius: 2px;
  background: ${(props) => props.background};
  color: ${(props) => props.color || "white"};
  font-family: inherit;
  font-size: 12px;
  padding: 12px 24px;
  border: none;
  font-weight: bold;
  margin: ${(props) => props.margin};

  &:disabled {
    opacity: 0.7;
    cursor: no-drop;
  }
`;
