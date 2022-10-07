import React from "react";
import Chart from "../Chart";
import { Grid, Paper, Typography } from "@mui/material";

import Orders from "../Orders";
import Title from "../Title";

function Deposits({ incomes }) {
  return (
    <React.Fragment>
      <Title>My Incomes</Title>
      <Typography component="p" variant="h4">
        {incomes}$
      </Typography>
    </React.Fragment>
  );
}

const Main = () => {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Deposits incomes={0} />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Main;
