import {
  Button,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessDialog from "../dialog/SuccessDialog";

const CreateMediaAdForm = () => {
  const [mediaAdsForm, setMediaAdsForm] = useState({
    heading1: "",
    heading2: "",
    description: "",
    landscapeImg: "",
    portraitImg: "",
    squareImg: "",
    videoURL: "",
    businessName: "",
    buttonLabel: "",
    websiteURL: "",
  });
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMediaAdsForm({
      heading1: "",
      heading2: "",
      description: "",
      landscapeImg: "",
      portraitImg: "",
      squareImg: "",
      videoURL: "",
      businessName: "",
      buttonLabel: "",
      websiteURL: "",
    });

    mediaAdsForm.heading1 === "" &&
    mediaAdsForm.heading2 === "" &&
    mediaAdsForm.description === "" &&
    mediaAdsForm.landscapeImg === "" &&
    mediaAdsForm.portraitImg === "" &&
    mediaAdsForm.squareImg === "" &&
    mediaAdsForm.videoURL === "" &&
    mediaAdsForm.businessName === "" &&
    mediaAdsForm.buttonLabel === "" &&
    mediaAdsForm.websiteURL === ""
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
            marginTop: "50px",
            marginBottom: "70px",
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
                        value={mediaAdsForm.heading1}
                        onChange={(e) =>
                          setMediaAdsForm({
                            ...mediaAdsForm,
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
                        value={mediaAdsForm.heading2}
                        onChange={(e) =>
                          setMediaAdsForm({
                            ...mediaAdsForm,
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
                        value={mediaAdsForm.description}
                        onChange={(e) =>
                          setMediaAdsForm({
                            ...mediaAdsForm,
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
              <Grid item container gap={1} justifyContent={"center"}>
                <Grid item xs={4}>
                  <FormGroup>
                    <InputLabel
                      htmlFor="landscapeImg"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      Landscape Marketing Image(1.9:1)
                    </InputLabel>
                    <OutlinedInput
                      id="landscapeImg"
                      value={mediaAdsForm.landscapeImg}
                      onChange={(e) =>
                        setMediaAdsForm({
                          ...mediaAdsForm,
                          landscapeImg: e.target.value,
                        })
                      }
                      placeholder="Add the URL of the image you want to use for the Ad"
                      size="small"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={4}>
                  <FormGroup>
                    <InputLabel
                      htmlFor="portraitImg"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      Portrait Marketing Image(4:5)
                    </InputLabel>
                    <OutlinedInput
                      id="portraitImg"
                      value={mediaAdsForm.portraitImg}
                      onChange={(e) =>
                        setMediaAdsForm({
                          ...mediaAdsForm,
                          portraitImg: e.target.value,
                        })
                      }
                      placeholder="Add the URL of the image you want to use for the Ad"
                      size="small"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup>
                    <InputLabel
                      htmlFor="squareImg"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      Square Marketing Image(1:1)
                    </InputLabel>
                    <OutlinedInput
                      id="squareImg"
                      value={mediaAdsForm.squareImg}
                      onChange={(e) =>
                        setMediaAdsForm({
                          ...mediaAdsForm,
                          squareImg: e.target.value,
                        })
                      }
                      placeholder="Add the URL of the image you want to use for the Ad"
                      size="small"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid item container justifyContent={"center"}>
                <Grid item xs={11}>
                  <FormGroup>
                    <InputLabel
                      htmlFor="videoURL"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      Video URL
                    </InputLabel>
                    <OutlinedInput
                      id="videoURL"
                      value={mediaAdsForm.videoURL}
                      onChange={(e) =>
                        setMediaAdsForm({
                          ...mediaAdsForm,
                          videoURL: e.target.value,
                        })
                      }
                      placeholder="Add the URL of the video you want to use for the ad"
                      size="small"
                    />
                  </FormGroup>
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
                      value={mediaAdsForm.businessName}
                      onChange={(e) =>
                        setMediaAdsForm({
                          ...mediaAdsForm,
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
                      value={mediaAdsForm.buttonLabel}
                      onChange={(e) =>
                        setMediaAdsForm({
                          ...mediaAdsForm,
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
                      htmlFor="websiteURL"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "5px",
                      }}
                    >
                      Website URL
                    </InputLabel>
                    <OutlinedInput
                      id="websiteURL"
                      value={mediaAdsForm.websiteURL}
                      onChange={(e) =>
                        setMediaAdsForm({
                          ...mediaAdsForm,
                          websiteURL: e.target.value,
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

export default CreateMediaAdForm;
