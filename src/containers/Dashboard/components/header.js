import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

import { FlexWrapper, Spacer } from "components/Flex";
import { Paper } from "components/Paper";
import { Text, Link } from "components/Text";

const DashboardHeader = () => {
  return (
    <Paper background="#37B04C" width="100%" margin="16px 0">
      <FlexWrapper alignItems="center">
        <Text color="white" size="18px" weight="bold">
          MARKET INSIGHT
        </Text>
        <Spacer />
        <img src={require("images/Help.png")} height="16" alt="help-icon" />
        <Link color="white" size="14px" href="#" margin="0 16px 0 0">
          &nbsp;Click here for help
        </Link>
        <MdKeyboardArrowUp color="white" size="24px" />
      </FlexWrapper>
    </Paper>
  );
};

export default DashboardHeader;
