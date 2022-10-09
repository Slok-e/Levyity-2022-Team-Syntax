import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const announcements = [
    {
      title: "Hollywood Features Many Historic Homes",
      content:
        "The Downtown Hollywood Mural Program features more than 30 must-see murals by world class artists",
    },
    {
      title: "Hollywood Plans to Open Park",
      content: "Construction starts next year",
    },
    {
      title: "Building Permit Approved",
      content: "The building will be world renowned",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <h2 bold>Announcements</h2>
      <TabPanel value={value} index={0}>
        <h3>Hollywood Features Many Historic Homes</h3>
        <p>
          The Downtown Hollywood Mural Program features more than 30 must-see
          murals by world class artists
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>Hollywood Plans to Open Park</h3>
        <p>Construction starts next year</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>Building Permit Approved</h3>
        <p>Amid public outcry the building will go up</p>
      </TabPanel>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="." {...a11yProps(0)} />
          <Tab label="." {...a11yProps(1)} />
          <Tab label="." {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
}
