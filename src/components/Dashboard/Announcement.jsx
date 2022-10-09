import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Circle,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Button, MobileStepper, Paper } from "@mui/material";
import { useTheme } from "@emotion/react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const announcements = [
  {
    label: "Hollywood Features Many Historic Homes",
    imgPath:
      "https://www.hollywoodfl.org/ImageRepository/Document?documentID=19841",
    content:
      "The Downtown Hollywood Mural Program features more than 30 must-see murals by world class artists",
  },
  {
    label: "Hollywood Plans to Open Park",
    imgPath:
      "https://www.hollywoodfl.org/ImageRepository/Document?documentID=19848",
    content: "Construction starts next year",
  },
  {
    label: "Building Permit Approved",
    imgPath:
      "https://www.hollywoodfl.org/ImageRepository/Document?documentID=19847",
    content: "The building will be world renowned",
  },
];

export default function BasicTabs() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = announcements.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    // <Box sx={{ width: "100%", padding: "1rem" }}>
    //   <Typography variant="h6" component="h2" fontWeight={700}>
    //     Announcements
    //   </Typography>
    //   <TabPanel value={value} index={0}>
    //     <h3>Hollywood Features Many Historic Homes</h3>
    //     <p>
    //       The Downtown Hollywood Mural Program features more than 30 must-see
    //       murals by world class artists
    //     </p>
    //   </TabPanel>
    //   <TabPanel value={value} index={1}>
    //     <h3>Hollywood Plans to Open Park</h3>
    //     <p>Construction starts next year</p>
    //   </TabPanel>
    //   <TabPanel value={value} index={2}>
    //     <h3>Building Permit Approved</h3>
    //     <p>Amid public outcry the building will go up</p>
    //   </TabPanel>
    //   <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
    //     <Tabs
    //       value={value}
    //       onChange={handleChange}
    //       aria-label="basic tabs example"
    //     >
    //       <Tab icon={<Circle />} {...a11yProps(0)} />
    //       <Tab className="tab-icon" icon={<Circle />} {...a11yProps(1)} />
    //       <Tab icon={<Circle />} {...a11yProps(2)} />
    //     </Tabs>
    //   </Box>
    // </Box>
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{announcements[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {announcements.map((step, index) => (
          <div key={step.label} style={{ position: "relative" }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <div className="announcement-text">
                  {" "}
                  <p>{step.content} </p>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
