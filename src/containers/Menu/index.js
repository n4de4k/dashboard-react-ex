import React from "react";
import styled from "styled-components";
import { RiMenu2Line } from "react-icons/ri";

import { ImageIconButton } from "components/Button";
import { FlexWrapper } from "components/Flex";

const MenuContainer = styled(FlexWrapper)`
  width: 72px;
  border: 0.5px solid #d2d2d2;
  flex-direction: column;
  align-items: center;
  padding: 12px 0 0 0;
  position: absolute;
  top: 72px;
  left: 0;
  bottom: 0;
  background: white;
`;

const MenuItem = styled.div`
  cursor: pointer;
  text-align: center;

  ${(props) => {
    if (props.active) {
      return `
      background: #d2d2d2;
      `;
    } else {
      return `&:hover {
        background: #f7f7f7;
      }`;
    }
  }}
  padding: 8px 0;
  width: 100%;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <RiMenu2Line size="32px" color="#C5C5C5" />
      </MenuItem>
      <MenuItem active>
        <ImageIconButton src={require("images/dashboard.svg")} height="30" />
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
