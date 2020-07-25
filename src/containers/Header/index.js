import React from "react";
import styled from "styled-components";

import { Spacer, FlexWrapper } from "components/Flex";
import { Text } from "components/Text";
import { ImageIconButton } from "components/Button";

const Container = styled(FlexWrapper)`
  box-shadow: 0px 3px 6px #00000029;
  padding: 12px 24px;
  align-items: center;
  height: 48px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background: white;
`;

const Header = () => {
  return (
    <Container>
      <img
        src={require("images/advotics-logo.jpg")}
        height="40"
        alt="advotics-logo"
      />
      <Spacer />
      <div style={{ marginRight: 12 }}>
        <Text color="#727272" size="14px">
          Username
        </Text>
        <Text color="#727272" size="10px">
          Company Name
        </Text>
      </div>
      <ImageIconButton src={require("images/Profile.svg")} height="28" />
      <ImageIconButton src={require("images/logout.png")} height="16" />
    </Container>
  );
};

export default Header;
