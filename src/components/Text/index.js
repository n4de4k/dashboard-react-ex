import styled from "styled-components";

export const Text = styled.p`
  margin: ${(props) => props.margin || "0"};
  padding: 0;
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || "12px"};
  font-family: inherit;
  text-align: left;
  font-weight: ${(props) => props.weight};
`;

export const Link = styled.a`
  margin: ${(props) => props.margin || "0"};
  padding: 0;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || "12px"};
  font-family: inherit;
  text-align: left;
  font-weight: ${(props) => props.weight};
`;
