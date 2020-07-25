import React from "react";
import { MdMoreVert } from "react-icons/md";

import { Paper } from "components/Paper";
import { Text } from "components/Text";
import { SKUListItem } from "components/List";
import { FlexWrapper } from "components/Flex";

const BestSellingCard = () => {
  return (
    <Paper width="100%">
      <FlexWrapper
        alignItems="center"
        justify="space-between"
        margin="0 0 12px 0"
      >
        <Text size="18px" color="#4D4F5C">
          BEST SELLING SKU
        </Text>
        <MdMoreVert />
      </FlexWrapper>
      <SKUListItem
        imgSize="72px"
        name="Product A"
        soldAmount={14}
        background="#FFE7BD"
        price="9.000"
        imgUrl={require("images/product-ex1.png")}
      />
      {[1, 2, 3, 4].map((_, key) => (
        <SKUListItem
          key={key}
          name="Product A"
          soldAmount={14}
          price="9.000"
          imgUrl={require("images/product-ex1.png")}
        />
      ))}
    </Paper>
  );
};

export default BestSellingCard;
