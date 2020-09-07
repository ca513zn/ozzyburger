import React from "react";
import Divider from "@material-ui/core/Divider";

const CheckoutTab = ({ cart }) => {
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
              margin: "8px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                padding: "0 64px 0 32px",
              }}
            >
              <p>{item.name}</p>
              <p>$ {item.price}</p>
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
