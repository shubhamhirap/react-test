import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import {
  FormGroup,
  Grid,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DonutChart from "../DonutChart/DonutChart";

function createData(group, clicks, cost, conversions, revenue) {
  return {
    group,
    clicks,
    cost,
    conversions,
    revenue,
  };
}

const rows = [
  createData("Male", 348, "USD 12528", 42, "USD 62118"),
  createData("Female", 692, "USD 24912", 35, "USD 5175"),
  createData("Unknown", 105, "USD 3943", 3, "USD 4489"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "group",
    numeric: false,
    disablePadding: true,
    label: "Group",
  },
  {
    id: "clicks",
    numeric: true,
    disablePadding: false,
    label: "Clicks",
  },
  {
    id: "cost",
    numeric: true,
    disablePadding: false,
    label: "Cost",
  },
  {
    id: "conversions",
    numeric: true,
    disablePadding: false,
    label: "Conversions",
  },
  {
    id: "revenue",
    numeric: true,
    disablePadding: false,
    label: "Revenue",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{ px: 2 }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// Chart


export default function SortingTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("group");
  const [alignment, setAlignment] = useState("chart");
  const [selectVal, setSelectVal] = useState("clicks");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid rgba(238,238,238, 0.8)",
          position: "relative",
        }}
      >
        <Grid
          container
          sx={{
            paddingTop: 2,
            paddingLeft: 2,
            paddingBottom: 1,
            borderBottom: "1px solid rgba(238,238,238, 0.8)",
          }}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography>Ad Insights </Typography>
          {alignment === "chart" ? (
            <FormGroup
              sx={{
                paddingRight: "30px",
                width: "160px",
              }}
            >
              <Select
                value={selectVal}
                onChange={(e) => setSelectVal(e.target.value)}
                size={"small"}
              >
                <MenuItem selected value="clicks">
                  Clicks
                </MenuItem>
                <MenuItem value="cost">Cost</MenuItem>
                <MenuItem value="conversions">Conversions</MenuItem>
                <MenuItem value="revenue">Revenue</MenuItem>
              </Select>
            </FormGroup>
          ) : null}
        </Grid>
        {alignment === "table" ? (
          <TableContainer>
            <Table sx={{ minWidth: 600 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy)).map(
                  (row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.group}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="normal"
                        >
                          {row.group}
                        </TableCell>
                        <TableCell align="right">{row.clicks}</TableCell>
                        <TableCell align="right">{row.cost}</TableCell>
                        <TableCell align="right">{row.conversions}</TableCell>
                        <TableCell align="right">{row.revenue}</TableCell>
                      </TableRow>
                    );
                  }
                )}
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key="total"
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                >
                  <TableCell
                    component="th"
                    id="total"
                    scope="row"
                    padding="normal"
                  >
                    Total
                  </TableCell>
                  <TableCell align="right">
                    {rows
                      .map((item) => item.clicks)
                      .reduce((prev, next) => prev + next)}
                  </TableCell>
                  <TableCell align="right">
                    USD{" "}
                    {rows
                      .map((item) => Number(item.cost.split(" ")[1]))
                      .reduce((prev, next) => prev + next)}
                  </TableCell>
                  <TableCell align="right">
                    {rows
                      .map((item) => item.conversions)
                      .reduce((prev, next) => prev + next)}
                  </TableCell>
                  <TableCell align="right">
                    USD{" "}
                    {rows
                      .map((item) => Number(item.revenue.split(" ")[1]))
                      .reduce((prev, next) => prev + next)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <DonutChart chartData={rows} matrix={selectVal}  />
        )}
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <ToggleButton value={"chart"} sx={{ borderRadius: "50%" }}>
            <DonutLargeOutlinedIcon />
          </ToggleButton>
          <ToggleButton value={"table"} sx={{ borderRadius: "50%" }}>
            <TableChartOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </Box>
  );
}
