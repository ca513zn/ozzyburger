import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import TodayIcon from "@material-ui/icons/Today";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MarqueeText from "./MarqueeText";
import CalendarTab from "./CalendarTab";

const themeColor1 = "white";

const StyledTabs = withStyles({
  root: {
    backgroundColor: "black",
  },
  indicator: {
    backgroundColor: themeColor1,
    height: "4px",
    borderRadius: "10px",
  },
})(Tabs);
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
    backgroundColor: "black",
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
        <StyledTabs
          value={value}
          onChange={handleChange}
          scrollButtons="auto"
          variant="fullWidth"
          aria-label="Ozzy's menu"
        >
          <Tab
            label={<FastfoodIcon style={{ fill: "white" }} />}
            {...a11yProps(0)}
          />
          <Tab
            label={<TodayIcon style={{ fill: "white" }} />}
            {...a11yProps(1)}
          />
          <Tab
            label={<ShoppingCartIcon style={{ fill: "white" }} />}
            {...a11yProps(2)}
          />
        </StyledTabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <header
            style={{
              color: "white",
              width: "100%",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            <h1
              style={{
                fontFamily: "'Fredoka One', cursive",
                letterSpacing: "4px",
              }}
            >
              {"Ozzy's Burgers 🍔"}
            </h1>
            <div
              style={{
                marginTop: "-4px",
                fontStyle: "italic",
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
                  borderRadius: "100%",
                  border: "2px solid white",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "8px 0",
              color: "white",
            }}
          >
            <p
              style={{ fontFamily: "'Fredoka One', cursive", fontSize: "36px" }}
            >
              {"Our Menu 🍽"}
            </p>
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
            {
              category: "Sides 🍟",
              items: [
                {
                  name: "Red Potato Salad For 1",
                  image:
                    "https://www.skinnytaste.com/wp-content/uploads/2009/06/red-potato-salad.jpg",
                  price: 20,
                  description: `Delicious Steamed Red Potatoes, Mixed with Fresh Dill, Served With Fresh Cold Cream`,
                },
                {
                  name: "Red Potato Salad for 3",
                  image:
                    "https://www.vidarecipes.com/wp-content/uploads/2017/05/Red-Hot-Blues-Potato-Salad.jpg",
                  price: 50,
                  description: `Delicious Steamed Red Potatoes, Mixed with Fresh Dill, Served With Fresh Cold Cream`,
                },
              ],
            },
          ].map((item) => (
            <div
              key={item.category}
              onClick={() => handleCollapseChange(item.category)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 24px",
                  cursor: "pointer",
                  marginBottom: "4px",
                  color: "white",
                  borderBottom: "2px solid white",
                  borderStyle: "none none dotted none",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "24px",
                  }}
                >
                  {item.category}
                </p>
                <div>
                  <IconButton aria-label={item.category}>
                    {currentCollapsed.includes(item.category) ? (
                      <ExpandLessIcon style={{ fill: "white" }} />
                    ) : (
                      <ExpandMoreIcon style={{ fill: "white" }} />
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
                        color: "white",
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
                          width: "100%",
                          margin: "0 8px",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="h6">{foodItem.name}</Typography>
                          <Typography variant="h6">
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
          <CalendarTab />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Contact information
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
