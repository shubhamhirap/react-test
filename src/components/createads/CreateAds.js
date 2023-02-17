import React, { useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Card,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import textAdsImage from "../../assets/images/textAds.png";
import mediaAdsImage from "../../assets/images/mediaAds.png";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CreateAds = () => {
  const [checkboxInput, setCheckboxInput] = useState("");

  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate(`/createads/${checkboxInput}`);
  };

  return (
    <Grid
      container
      direction={"row"}
      spacing={2}
      sx={{ height: "93vh" }}
      justifyContent="center"
      alignItems={"center"}
    >
      <Grid item xs={11}>
        <Item>
          <Grid
            container
            sx={{ height: "80vh" }}
            justifyContent="center"
            alignItems={"center"}
            gap={3}
          >
            <Grid item xs={3}>
              <Card
                variant="outlined"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Checkbox
                  sx={{ alignSelf: "flex-start" }}
                  value={"text"}
                  onChange={(e) => setCheckboxInput(e.target.value)}
                />
                <Box>
                  <img src={textAdsImage} alt="text ads" />
                </Box>
                <Box
                  sx={{
                    height: "50px",
                    padding: "20px",
                    backgroundColor: "rgba(238,238,238,0.9)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="subTitle2" color={"#333"}>
                    Create
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "700" }}>
                    Text Ad
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                variant="outlined"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Checkbox
                  sx={{ alignSelf: "flex-start" }}
                  value={"media"}
                  onChange={(e) => setCheckboxInput(e.target.value)}
                />
                <Box>
                  <img src={mediaAdsImage} alt="media ads" />
                </Box>
                <Box
                  sx={{
                    height: "50px",
                    padding: "20px",
                    backgroundColor: "rgba(238,238,238,0.9)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="subTitle2" color={"#333"}>
                    Create
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "700" }}>
                    Media Ad
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              position: "relative",
              left: "580px",
              bottom: "20px",
              padding: "5px 30px",
            }}
            onClick={(e) => handleNext(e)}
          >
            Next
          </Button>
        </Item>
      </Grid>
    </Grid>
  );
};

export default CreateAds;
