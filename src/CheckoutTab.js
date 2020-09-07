import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const CheckoutTab = ({ cart, removeItem }) => {
  
  return (
    <>
      <div
        style={{
          color: "white",
          margin: "72px 0 8px 0 ",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <header>
          <h1>Checkout</h1>
        </header>
        <div
          style={{
            color: "white",
            padding: "0 64px",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            borderBottom: "1px dotted white",
          }}
        >
          <h3>Items</h3>
          <h3>Price</h3>
        </div>
      </div>

      {cart.length === 0 ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <h2>
            No items in cart <br /> May we offer you a burger?
          </h2>
        </div>
      ) : (
        cart.map((item, i) => (
          <div
            key={item + "-" + i}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                padding: "0 0 0 32px",
                width: "100%",
                alignItems: "center",
                height: "30px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                {item.name}
              </p>
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p>$ {item.price}</p>
                <IconButton
                  aria-label="delete_item"
                  onClick={() => removeItem(item.uuid)}
                >
                  <HighlightOffIcon style={{ fill: "white", padding: "4px" }} />
                </IconButton>
              </div>
            </div>
          </div>
        ))
      )}

      <div
        style={{
          borderBottom: "1px dotted white",
        }}
      ></div>
    </>
  );
};

export default CheckoutTab;
