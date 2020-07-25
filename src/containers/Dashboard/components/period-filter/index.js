import "./period.css";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import DatePicker from "react-datepicker";

import { Paper, Overlay } from "components/Paper";
import { Text } from "components/Text";
import { FlexWrapper, Spacer, Grid } from "components/Flex";
import { Button } from "components/Button";

import { getModifiedDate, getStartAndEndOfMonth, dateToString } from "common";

const DownIcon = styled(MdKeyboardArrowDown)`
  color: #757575;
  font-size: 22px;
  margin: 4px 0 0 8px;
`;

const CloseIcon = styled(MdClose)`
  color: #757575;
  font-size: 22px;
  margin: 4px 0 0 8px;
  cursor: pointer;
`;

const Container = styled(Paper)`
  position: ${(props) => props.position};
  right: 0;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 0;
`;

const OptionContainer = styled.div`
  background: ${(props) => props.background};
  cursor: pointer;
`;

const Option = ({ hasDivider, label, onSelect, selected }) => {
  return (
    <OptionContainer
      background={selected ? "#37B04C" : "transparent"}
      onClick={onSelect}
    >
      <Text
        color={selected ? "white" : "#8a8a8a"}
        margin="12px 16px"
        weight={selected ? "bold" : "normal"}
      >
        {label}
      </Text>
      {!!hasDivider && !selected && <Divider />}
    </OptionContainer>
  );
};

const PeriodFilter = ({ startPeriod, endPeriod, onChangePeriod }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [selectedOption, setSelectedOption] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (endDate < startDate) {
      setErrorMsg("End Period must be after Start Period");
    } else if (!endDate || !startDate) {
      setErrorMsg("End Date and Start Period is required");
    } else {
      const startTime = startDate.getTime();
      const endTime = startDate.getTime();

      const diff = endTime - startTime;

      console.log(diff, 6 * 30 * 24 * 60 * 60 * 1000);
      if (diff > 6 * 30 * 24 * 60 * 60 * 1000) {
        setErrorMsg(`Period Range can't be more than 6 month`);
      }
    }
  }, [endDate, startDate]);

  useEffect(() => {
    setStartDate(startPeriod);
    setEndDate(endPeriod);
  }, [endPeriod, startPeriod]);

  const onToday = useCallback(() => {
    setStartDate(new Date());
    setEndDate(new Date());
  }, []);

  const onYesterday = useCallback(() => {
    const yesterday = getModifiedDate(-1, "d");
    setStartDate(yesterday);
    setEndDate(yesterday);
  }, []);

  const onLast7Day = useCallback(() => {
    const last7Day = getModifiedDate(-7, "d");
    const yesterday = getModifiedDate(-1, "d");

    setStartDate(last7Day);
    setEndDate(yesterday);
  }, []);

  const onLast30Day = useCallback(() => {
    const last30Day = getModifiedDate(-30, "d");
    const yesterday = getModifiedDate(-1, "d");

    setStartDate(last30Day);
    setEndDate(yesterday);
  }, []);

  const onMonth = useCallback(() => {
    const [start, end] = getStartAndEndOfMonth(new Date());

    setStartDate(start);
    setEndDate(end);
  }, []);

  const onCustom = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
  }, []);

  const filterOptions = useMemo(
    () => [
      {
        label: "Today",
        onClick: onToday,
      },
      {
        label: "Yesterday",
        onClick: onYesterday,
      },
      {
        label: "Last 7 days",
        onClick: onLast7Day,
      },
      {
        label: "Last 30 days",
        onClick: onLast30Day,
      },
      {
        label: "This Month",
        onClick: onMonth,
      },
      {
        label: "Custom",
        onClick: onCustom,
      },
    ],
    [onCustom, onLast30Day, onLast7Day, onMonth, onToday, onYesterday]
  );

  const onOpenPicker = useCallback(() => {
    // reset picker value
    setErrorMsg("");
    setSelectedOption(null);
    setStartDate(startPeriod);
    setEndDate(endPeriod);
    setShowPicker(true);
  }, [endPeriod, startPeriod]);

  return (
    <>
      <div style={{ position: "relative", zIndex: 4 }}>
        <Container
          width={showPicker ? "800px" : "450px"}
          pointer={!showPicker}
          position={showPicker ? "absolute" : "relative"}
        >
          {!showPicker ? (
            <FlexWrapper alignItems="center" onClick={onOpenPicker}>
              <img
                src={require("images/calendar.png")}
                height="16px"
                alt="calendar-icon"
              />
              &nbsp;
              <Text size="14px" color="#8B8B8B">
                Period
              </Text>
              <Spacer />
              <Text size="13px" color="#8B8B8B">
                {dateToString(startPeriod)} - {dateToString(endPeriod)}
              </Text>
              <DownIcon />
            </FlexWrapper>
          ) : (
            <>
              <FlexWrapper alignItems="center" margin="0 0 16px 0">
                <img
                  src={require("images/calendar.png")}
                  height="16px"
                  alt="calendar-icon"
                />
                &nbsp;
                <Text size="14px" color="#8B8B8B">
                  Period
                </Text>
                <Spacer />
                <CloseIcon onClick={() => setShowPicker(false)} />
              </FlexWrapper>
              {!!errorMsg && (
                <Text color="red" size="11px" margin="8px 8px">
                  {errorMsg}
                </Text>
              )}
              <FlexWrapper>
                <Grid grow={1}>
                  <FlexWrapper direction="column">
                    {filterOptions.map((opt, key) => {
                      opt.onSelect = () => {
                        opt.onClick();
                        setSelectedOption(key);
                      };
                      return (
                        <Option
                          {...opt}
                          key={key}
                          selected={key === selectedOption}
                          hasDivider={key < filterOptions.length - 1}
                        />
                      );
                    })}

                    <Button
                      background="#37B04C"
                      margin="16px 0 0 0"
                      onClick={() => {
                        onChangePeriod(startDate, endDate);
                        setShowPicker(false);
                      }}
                      disabled={!!errorMsg}
                    >
                      Apply
                    </Button>
                  </FlexWrapper>
                </Grid>
                <FlexWrapper alignItems="center">
                  <DatePicker
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(date) => {
                      setStartDate(date);
                    }}
                    inline
                    selected={startDate}
                  />
                </FlexWrapper>
                <FlexWrapper alignItems="center">
                  <DatePicker
                    onChange={(date) => {
                      setEndDate(date);
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    selected={endDate}
                    inline
                  />
                </FlexWrapper>
              </FlexWrapper>
            </>
          )}
        </Container>
      </div>
      {!!showPicker && <Overlay onClick={() => setShowPicker(false)} />}
    </>
  );
};

export default PeriodFilter;
