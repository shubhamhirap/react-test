import React, { useState } from "react";
import {
  Button,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import "./index.css";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SuccessDialog from "../dialog/SuccessDialog";

const CreateTextAdForm = () => {
  const [textAdsForm, setTextAdsForm] = useState({
    heading1: "",
    heading2: "",
    description: "",
    businessName: "",
    buttonLabel: "",
    websiteUrl: "",
  });
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextAdsForm({
      heading1: "",
      heading2: "",
      description: "",
      businessName: "",
      buttonLabel: "",
      websiteUrl: "",
    });

    textAdsForm.heading1 === "" &&
    textAdsForm.heading2 === "" &&
    textAdsForm.description === "" &&
    textAdsForm.businessName === "" &&
    textAdsForm.buttonLabel === "" &&
    textAdsForm.websiteUrl === ""
      ? setOpenDialog(false)
      : setOpenDialog(true);
  };
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={11}>
        <Paper
          sx={{
            marginTop: "70px",
            marginBottom: "100px",
            height: "100%",
            position: "relative",
          }}
        >
          <form className="create-ad-form">
            <FormLabel
              component={"h2"}
              sx={{ fontWeight: 700, marginLeft: "45px", fontSize: "1.1rem" }}
            >
              Create Text & Media
            </FormLabel>
            <Grid container direction={"column"} gap={2}>
              <Grid item container gap={2} justifyContent={"center"} sx={12}>
                <Grid item container direction={"column"} xs={6} gap={2}>
                  <Grid item xs={5}>
                    <FormGroup>
                      <InputLabel
                        htmlFor="heading1"
                        sx={{
                          fontWeight: 600,
                          marginBottom: "5px",
                        }}
                      >
                        Heading 01
                      </InputLabel>
                      <OutlinedInput
                        id="heading1"
                        value={textAdsForm.heading1}
                        onChange={(e) =>
                          setTextAdsForm({
                            ...textAdsForm,
                            heading1: e.target.value,
                          })
                        }
                        placeholder="Add a heading that would make users interested"
                        size="small"
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={5}>
                    <FormGroup>
                      <InputLabel
                        htmlFor="heading2"
                        sx={{
                          fontWeight: 600,
                          marginBottom: "5px",
                        }}
                      >
                        Heading 02
                      </InputLabel>
                      <OutlinedInput
                        id="heading2"
                        value={textAdsForm.heading2}
                        onChange={(e) =>
                          setTextAdsForm({
                            ...textAdsForm,
                            heading2: e.target.value,
                          })
                        }
                        placeholder="Add a heading that would make users interested"
                        size="small"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
                <Grid item container xs={5}>
                  <Grid item xs={12}>
                    <FormGroup>
                      <InputLabel
                        htmlFor="description"
                        sx={{
                          fontWeight: 600,
                          marginBottom: "5px",
                        }}
                      >
                        Description
                      </InputLabel>
                      <OutlinedInput
                        id="description"
                        value={textAdsForm.description}
                        onChange={(e) =>
                          setTextAdsForm({
                            ...textAdsForm,
                            description: e.target.value,
                          })
                        }
                        placeholder="Add primary text to help users understand more about your products services or offers"
                        multiline
                        minRows={5}
                        size="small"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container gap={2} justifyContent={"center"}>
                <Grid item xs={6}>
                  <FormGroup>
                    <InputLabel
                      htmlFor="businessName"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      Business Name
                    </InputLabel>
                    <OutlinedInput
                      id="businessName"
                      value={textAdsForm.businessName}
                      onChange={(e) =>
                        setTextAdsForm({
                          ...textAdsForm,
                          businessName: e.target.value,
                        })
                      }
                      placeholder="Add your business name"
                      size="small"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={5}>
                  <FormGroup>
                    <InputLabel
                      htmlFor="buttonLabel"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      Button Label
                    </InputLabel>
                    <OutlinedInput
                      id="buttonLabel"
                      value={textAdsForm.buttonLabel}
                      onChange={(e) =>
                        setTextAdsForm({
                          ...textAdsForm,
                          buttonLabel: e.target.value,
                        })
                      }
                      placeholder="Add a label that best suits your ad"
                      size="small"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid item container justifyContent={"center"}>
                <Grid item xs={11}>
                  <FormGroup>
                    <InputLabel
                      htmlFor="websiteUrl"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      Website URL
                    </InputLabel>
                    <OutlinedInput
                      id="websiteUrl"
                      value={textAdsForm.websiteUrl}
                      onChange={(e) =>
                        setTextAdsForm({
                          ...textAdsForm,
                          websiteUrl: e.target.value,
                        })
                      }
                      placeholder="Add a label that best suits your ad"
                      size="small"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                position: "absolute",
                bottom: "30px",
                right: "30px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&.MuiButton-root:hover": {
                    backgroundColor: "white",
                  },
                  padding: "10px 40px",
                }}
                onClick={(e) => handleBack(e)}
              >
                Back
              </Button>
              <Button
                variant="contained"
                sx={{ padding: "10px 40px" }}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
          {openDialog ? (
            <SuccessDialog open={openDialog} close={handleClose} />
          ) : null}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreateTextAdForm;
