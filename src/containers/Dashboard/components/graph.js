import React, { useEffect, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import Chart from "chart.js";

import { Paper } from "components/Paper";
import { FlexWrapper, Spacer } from "components/Flex";
import { Text } from "components/Text";
import { Select } from "components/Dropdown";

import { getRandomValueInRange } from "common";

const GraphDashboard = ({ startPeriod, endPeriod }) => {
  const [dataUPT, setDataUPT] = useState([18, 12, 10, 1, 12, 3, 7]);
  const [dataNett, setDataNett] = useState([12, 19, 3, 5, 2, 3, 4]);

  useEffect(() => {
    if (startPeriod && endPeriod) {
      const newUpt = [],
        newNett = [];
      for (let i = 0; i < 7; ++i) {
        newUpt.push(getRandomValueInRange(0, 20));
        newNett.push(getRandomValueInRange(0, 20));
      }

      setDataUPT(newUpt);
      setDataNett(newNett);
    }
  }, [endPeriod, startPeriod]);

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Unit Per Transaction",
            data: dataUPT,
            backgroundColor: "#FFE854",
            borderColor: "#FFE854",
            type: "line",
            fill: false,
            lineTension: 0,
          },
          {
            label: "Nett",
            data: dataNett,
            backgroundColor: "#37B04C",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [dataNett, dataUPT]);
  return (
    <Paper width="100%">
      <FlexWrapper alignItems="center" margin="0 0 16px 0">
        <Text size="18px" color="#4D4F5C">
          AVERAGE PURCHASE VALUE
        </Text>
        <Spacer />
        <Select margin="0 12px 0 0">
          <option>Last 6 month</option>
          <option>Last year</option>
          <option>Last 2 year</option>
        </Select>
        <MdMoreVert />
      </FlexWrapper>
      <canvas id="myChart" width="400" height="400"></canvas>
    </Paper>
  );
};

export default GraphDashboard;
