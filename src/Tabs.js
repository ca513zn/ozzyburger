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

  const [currentCollapsed, setCurrentCollapsed] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCollapseChange = (tab) => {
    currentCollapsed.includes(tab)
      ? setCurrentCollapsed(currentCollapsed.filter((i) => i !== tab))
      : setCurrentCollapsed(currentCollapsed.concat(tab));
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
            <div
              style={{
                marginTop: "-4px",
              }}
            >
              Est. 2020
            </div>
            <div
              style={{
                margin: "16px 0",
              }}
            >
              <h3>Tel: 984 269 0027, Cancún, Mx.</h3>
            </div>
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
                  "Why aren’t burgers too good at basketball? Too many turnovers!",
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
              justifyContent: "center",
              padding: "8px 0",
              borderBottom: "4px solid gray",
            }}
          >
            <Typography variant="h4">{"Our Menu 🍽"}</Typography>
          </div>
          {[
            {
              category: "Burgers 🍔",
              items: [
                {
                  name: "Classic Ozz",
                  image:
                    "https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg?fit=978%2C650&ssl=1",
                  price: 25,
                  description: ` 300 g. Spiced Ground Beef, Spicy Creamy Mayo, Crispy
                  Cold Lettuce, Toasted Sesame Seed Bun, Fresh Tomatoes,
                  Crispy Onions`,
                },
                {
                  name: "Meat Monster",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzzrf_uOH16vft92SU0NPeVwTEM1QbyUwYSg&usqp=CAU",
                  price: 45,
                  description: ` 450 g. Spiced Ground Beef, Spicy Creamy Mayo, Crispy
                  Cold Lettuce, Toasted Sesame Seed Bun, Fresh Tomatoes,
                  Crispy Onions`,
                },
              ],
            },
            {
              category: "Milkshakes 🥤",
              items: [
                {
                  name: "Strawberry Banana",
                  image:
                    "https://www.evolvingtable.com/wp-content/uploads/2019/05/Strawberry-Banana-Smoothie-8.jpg",
                  price: 20,
                  description: `Fresh Strawberries, Fresh Bananas, Served Ice Cold, with a side of Vanilla Wafers`,
                },
                {
                  name: "Chocolate Dream",
                  image:
                    "https://keto-mojo.com/wp-content/uploads/2020/05/Keto-Chocolate-Milkshake-500x500.jpg",
                  price: 20,
                  description: `Premium Chocolate, Served Ice Cold with a side of Vanilla Wafers`,
                },
              ],
            },
            {
              category: "Pastas 🍝",
              items: [
                {
                  name: "Spaghetti and Meatballs",
                  image:
                    "https://i2.wp.com/myemeraldkitchen.com/wp-content/uploads/2014/06/P1050187_ekl-1.jpg?ssl=1",
                  price: 55,
                  description: `Steamy Hot Noodles, Served with Delicious thick meaty Tomato Sauce, Blended with a special mix of spices, Served with 3 Spicy Beef Meatballs`,
                },
                {
                  name: "Chicken Alfredo",
                  image:
                    "https://assets.kraftwhatscooking.ca/adaptivemedia/rendition/207492_3000x2000.jpg?id=cc88e859ce771d1ed03c01d1ec057fab5abd525c&ht=250&wd=375&clid=KRCA",
                  price: 60,
                  description: `Rich and Creamy Alfredo Sauce, Spiced with a mix of special spices, served with a juicy grilled chicken breast`,
                },
              ],
            },
          ].map((item) => (
            <div key={item.category}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "lightgrey",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 24px",
                }}
              >
                <Typography variant="h5">{item.category}</Typography>
                <div>
                  <IconButton
                    onClick={() => handleCollapseChange(item.category)}
                    aria-label={item.category}
                  >
                    {currentCollapsed.includes(item.category) ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </IconButton>
                </div>
              </div>

              <Collapse in={currentCollapsed.includes(item.category)}>
                {item.items.map((foodItem) => (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <img
                        src={foodItem.image}
                        alt="img"
                        style={{
                          width: "80px",
                          borderRadius: "10%",
                          margin: "8px",
                        }}
                      />
                      <div
                        key={foodItem.name}
                        style={{
                          margin: "0 8px",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="h5">{foodItem.name}</Typography>
                          <Typography variant="h5">
                            ${foodItem.price.toString()}
                          </Typography>
                        </Box>
                        <Box mb={1}>
                          <p
                            style={{
                              fontSize: "10px",
                            }}
                          >
                            {foodItem.description}
                          </p>
                        </Box>
                      </div>
                    </div>
                    <Divider />
                  </>
                ))}
              </Collapse>
              <Divider />
            </div>
          ))}
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
