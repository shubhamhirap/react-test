import * as React from "react";
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

function createData(campaigns, clicks, cost, conversions, revenue) {
  return {
    campaigns,
    clicks,
    cost,
    conversions,
    revenue,
  };
}

const rows = [
  createData("Cosmetics", 712, "USD 4272", 8, "USD 16568"),
  createData("Serums", 3961, "USD 27331", 115, "USD 362526"),
  createData("Facewash", 9462, "USD 78831", 123, "USD 266800"),
  createData("Shampoos", 439, "USD 2151", 5, "USD 11029"),
  createData("Conditioners", 1680, "USD 3864", 49, "USD 175245"),
  createData("Facewash 2", 4978, "USD 29370", 189, "USD 623106"),
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
    id: "campaigns",
    numeric: false,
    disablePadding: true,
    label: "Campaigns",
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
      <Typography sx={{ paddingTop: 2, paddingLeft: 2, paddingBottom: 1 }}>
        Ad Insights
      </Typography>
      <TableRow sx={{ borderTop: "1px solid rgba(238,238,238, 0.8)" }}>
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

export default function CustomTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("campaigns");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", height: "100%", mb: 2 }}>
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
                      key={row.campaigns}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="normal"
                      >
                        {row.campaigns}
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
      </Paper>
    </Box>
  );
}
