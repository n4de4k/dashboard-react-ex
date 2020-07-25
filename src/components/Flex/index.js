import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  flex-direction: ${(props) => props.direction || "row"};
  height: ${(props) => props.height};
`;

export const Grid = styled.div`
  flex-grow: ${(props) => props.grow};
  margin: ${(props) => props.margin || "0 8px"};
`;

export const Spacer = styled.div`
  flex-grow: 1;
`;
