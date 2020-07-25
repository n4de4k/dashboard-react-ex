import React, { useState, useEffect } from "react";
import { MdMoreVert, MdArrowDownward, MdArrowUpward } from "react-icons/md";

import { FlexWrapper } from "components/Flex";
import { Paper } from "components/Paper";
import { Text } from "components/Text";

import { formatMoney, getRandomValueInRange } from "common";

const TurnOverCard = ({ startPeriod, endPeriod }) => {
  const [turnOverVal, setTurnOverVal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTurnOverVal(getRandomValueInRange(1000000, 9999999));
    setPercentage(getRandomValueInRange(-100, 100));
  }, [startPeriod, endPeriod]);
  return (
    <Paper width="300px" margin="16px 0">
      <FlexWrapper justify="space-between" margin="0 0 8px 0">
        <Text color="#8B8B8B" size="12px">
          Sales Turnover
        </Text>
        <MdMoreVert />
      </FlexWrapper>
      <FlexWrapper justify="space-between">
        <div>
          <Text weight="bolder" size="20px">
            Rp {formatMoney(turnOverVal)}
          </Text>
          <Text color="#8B8B8B">
            <span style={{ color: percentage > 0 ? "green" : "red" }}>
              {percentage < 0 ? <MdArrowDownward /> : <MdArrowUpward />}
              {(percentage < 0 ? -1 * percentage : percentage).toFixed(1)}%
            </span>{" "}
            last period in products sold
          </Text>
        </div>
        <img
          src={require("images/turnover.svg")}
          height="40"
          alt="sales-turnover"
        />
      </FlexWrapper>
    </Paper>
  );
};

export default TurnOverCard;
