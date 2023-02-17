import { Grid } from "@mui/material";
import React from "react";
import CustomTable from "../table/CustomTable";
import SortingTable from "../table/SortingTable";

const Dashboard = () => {
  return (
    <>
      <Grid
        container
        sx={{
          mt: 5,
        }}
        justifyContent="center"
        gap={2}
      >
        <Grid item sx={{ display: { sx: 6, md: 6 } }}>
          <CustomTable />
        </Grid>
        <Grid item sx={{ display: { sx: 6, md: 6 } }}>
          <SortingTable />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
