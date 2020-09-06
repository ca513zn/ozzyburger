import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import TodayIcon from "@material-ui/icons/Today";
import CallIcon from "@material-ui/icons/Call";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
      {value === index && <Box>{children}</Box>}
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

  const [currentCollapse, setCurrentCollapse] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCollapseChange = (tab) => {
    tab === currentCollapse
      ? setCurrentCollapse(null)
      : setCurrentCollapse(tab);
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
          indicatorColor="secondary"
          textColor="secondary"
          scrollButtons="auto"
          variant="fullWidth"
          aria-label="Ozzy's menu"
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
          <header
            style={{
              backgroundColor: "white",
              width: "100%",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            <h1
              style={{
                fontFamily: "'Fredoka One', cursive",
                letterSpacing: "4px",
                color: "red",
              }}
            >
              {"Ozzy's Burgers 🍔"}
            </h1>
          </header>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                margin: "8px 0",
              }}
            >
              <MarqueeText
                list={[
                  "Welcome! May we take your order?",
                  "Try one of our new drinks: Coconut passion. (Coconut + PassionFruit)",
                  "The winner of last week's burger promo was: JUAN123. Congratulations!",
                ].concat("Thank you for choosing Ozzy's Burgers!")}
                variant="h5"
                marquee={true}
              />
            </div>
            <div
              style={{
                width: "100%",
                maxWidth: "550px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
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
              display: "flex",
              backgroundColor: "lightgrey",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 24px",
            }}
          >
            <div>Burgers</div>
            <div>
              <IconButton
                onClick={() => handleCollapseChange("burger")}
                aria-label="burgers"
              >
                {currentCollapse === "burger" ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </IconButton>
            </div>
          </div>
          <Collapse
            in={currentCollapse === "burger"}
            style={{
              padding: "0 16px",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5">Classic Ozz</Typography>
              <Typography variant="h5">$25</Typography>
            </Box>
            <Box mb={1}>
              <p style={{
                fontSize:"10px"
              }}>
                300 g. Spiced Ground Beef, Spicy Creamy Mayo, Crispy Cold
                Lettuce, Toasted Sesame Seed Bun, Fresh Tomatoes, Crispy Onions
              </p>
            </Box>
            <Divider />
          </Collapse>
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
