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
import CalendarTab from "./CalendarTab";
import StyledButton from "./StyledButton";
import CheckoutTab from "./CheckoutTab";
import { Menu } from "./Menu";

const themeColor1 = "white";

const StyledTabs = withStyles({
  root: {
    backgroundColor: "#2d180f",
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
  root: {},
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  let [cartItems, setCartItems] = useState([]);

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

  const handleAddItem = (item) => {
    setCartItems(cartItems.concat(item));
  };

  const ShoppingCart = () => {
    if (cartItems.length !== 0) {
      return (
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -4,
              top: -4,
              paddingTop: "2px",
              backgroundColor: "orangered",
              borderRadius: "100%",
              width: "16px",
              height: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "12px",
            }}
          >
            {cartItems.length}
          </div>
          <ShoppingCartIcon style={{ fill: "white" }} />;
        </div>
      );
    } else {
      return <ShoppingCartIcon style={{ fill: "white" }} />;
    }
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
          <Tab label={<ShoppingCart />} {...a11yProps(2)} />
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
                fontSize: "12px",
              }}
            >
              Est. 2020, Cancún, Mx.
            </div>
            <div
              style={{
                marginTop: "12px",
                marginBottom: "-12px",
                fontSize: "14px",
              }}
            >
              Order now, click this link:
            </div>
            <div
              style={{
                margin: "16px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19979306911530099344-512.png"
                style={{
                  width: "24px",
                  height: "24px",
                  marginRight: "8px",
                }}
              />
              <h2>
                <a
                  style={{ color: "limegreen", textDecoration: "none" }}
                  href="https://wa.me/529842690027?text=Hello%20Ozzy!%20I%20would%20like%20to%20place%20an%20order."
                >
                  984 269 0027
                </a>
              </h2>
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
            ></div>
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
          {Menu.map((item, i) => (
            <div key={i}>
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
                onClick={() => handleCollapseChange(item.category)}
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
                {item.items.map((foodItem, i) => (
                  <div key={`item-${foodItem}-${i}`}>
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
                        key={`menu-${foodItem}`}
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
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
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                          }}
                          onClick={() => handleAddItem(foodItem)}
                        >
                          <StyledButton />
                        </div>
                      </div>
                    </div>
                    <Divider />
                  </div>
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
          <CheckoutTab cart={cartItems} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
