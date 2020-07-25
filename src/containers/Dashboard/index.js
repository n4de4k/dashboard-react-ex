import React, { useState } from "react";
import styled from "styled-components";

import { Text } from "components/Text";
import { FlexWrapper, Grid } from "components/Flex";

import TurnOverCard from "./components/turn-over";
import GraphDashboard from "./components/graph";
import BestSellingCard from "./components/best-selling";
import TopCompetitorCard from "./components/top-competitor";
import DashboardHeader from "./components/header";
import PeriodFilter from "./components/period-filter";

const Container = styled.div`
  padding: 16px 24px;
`;

const Dashboard = () => {
  const [startPeriod, setStartPeriod] = useState(new Date());
  const [endPeriod, setEndPeriod] = useState(new Date());

  const onChangePeriod = (start, end) => {
    setStartPeriod(start);
    setEndPeriod(end);
  };
  return (
    <Container>
      <FlexWrapper justify="space-between">
        <Text size="32px" weight="bold">
          Dashboard
        </Text>
        <PeriodFilter
          startPeriod={startPeriod}
          endPeriod={endPeriod}
          onChangePeriod={onChangePeriod}
        />
      </FlexWrapper>
      <DashboardHeader />
      <TurnOverCard startPeriod={startPeriod} endPeriod={endPeriod} />
      <FlexWrapper margin="0 -8px" width="100%">
        <Grid grow={2}>
          <GraphDashboard startPeriod={startPeriod} endPeriod={endPeriod} />
        </Grid>
        <Grid grow={1}>
          <BestSellingCard />
        </Grid>
        <Grid grow={1}>
          <TopCompetitorCard />
        </Grid>
      </FlexWrapper>
    </Container>
  );
};

export default Dashboard;
