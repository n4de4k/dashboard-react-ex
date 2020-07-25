import React from "react";
import styled from "styled-components";

import { FlexWrapper } from "components/Flex";
import { Text } from "components/Text";

const ListItemImage = styled.img`
  object-size: cover;
  object-position: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  align-items: center;
`;

const SKUListContainer = styled(FlexWrapper)`
  border: 0.5px solid #c5c5c59c;
  border-radius: 4px;
  background: ${(props) => props.background || "white"};
  margin: 4px 0;
  align-items: center;
`;

const ListItemDescContainer = styled.div`
  flex-grow: 1;
  padding: 8px 12px;
`;

export const SKUListItem = ({
  imgSize = "56px",
  imgUrl,
  name,
  price,
  soldAmount,
  background,
}) => {
  return (
    <SKUListContainer background={background}>
      <ListItemImage src={imgUrl} size={imgSize} />
      <ListItemDescContainer>
        <Text color="black" size="14px">
          {name}
        </Text>
        <FlexWrapper justify="space-between">
          <Text color="#00000099" size="11px">
            Rp {price}
          </Text>
          <Text color="#00000099" size="11px">
            {soldAmount}
          </Text>
        </FlexWrapper>
      </ListItemDescContainer>
    </SKUListContainer>
  );
};
