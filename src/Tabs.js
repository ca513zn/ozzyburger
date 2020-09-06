import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import TodayIcon from "@material-ui/icons/Today";
import CallIcon from "@material-ui/icons/Call";
import Collapse from "@material-ui/core/Collapse";
import MarqueeText from "./MarqueeText";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="auto"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={<FastfoodIcon />} {...a11yProps(0)} />
          <Tab label={<TodayIcon />} {...a11yProps(1)} />
          <Tab label={<CallIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                marginBottom: "8px",
              }}
            >
              <h1>Welcome</h1>
            </div>
            <div
              style={{
                marginBottom: "8px",
              }}
            >
              <MarqueeText
                list={[
                  "Welcome! May we take your order?",
                  "Try one of our new drinks: Coconut passion (Coconut + PassionFruit).",
                  "The winner of last week's burger promo was: JUAN123. Congratulations!",
                ].concat("Thank you for choosing Ozzy's Burgers!")}
                variant="h3"
                marquee={true}
              />
            </div>
            <div
              style={{
                width: "350px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                alt="burger_image"
                src={
                  "https://www.wallpaperbetter.com/wallpaper/166/266/324/awesome-burger-hi-res-images-1080P-wallpaper-middle-size.jpg"
                }
                style={{
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "pink",
            }}
          >
            hello
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Offers day by day
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Contact information
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
