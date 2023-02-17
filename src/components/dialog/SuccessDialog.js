import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Dialog, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SuccessDialog(props) {
  const { close, open } = props;

  useEffect(() => {
    setTimeout(() => {
      close();
    }, 600);

    return () => {
      clearTimeout();
    };
  }, [close]);

  return (
    <Dialog
      onClose={close}
      open={open}
      sx={{
        backdropFilter: "blur(5px)",
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        direction={"column"}
        alignItems={"center"}
        sx={{ padding: "60px 120px" }}
      >
        <CheckCircleIcon
          sx={{ color: "#0000FF", padding: "10px" }}
          fontSize={"large"}
        />
        <Typography component={"h4"} fontWeight={"600"} fontSize={"1.2rem"}>
          Submitted
        </Typography>
      </Grid>
    </Dialog>
  );
}

SuccessDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

// export default function SimpleDialogDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Typography variant="subtitle1" component="div">
//         Selected: {selectedValue}
//       </Typography>
//       <br />
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }
