import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 24,
    padding: "4px 24px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginTop: "8px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);
const CalendarTab = () => {
  return (
    <div style={{ color: "white", marginTop: "64px" }}>
      {[
        {
          day: "Monday's",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
          promo: {
            offer: "2 x 40",
            item: "On Classic Ozz",
          },
        },
        {
          day: "Tuesday's",
          promo: {
            offer: "2 x 30",
            item: "On Milkshakes",
          },
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1iUR64FGZGBJcEeFTmBDALMLzu-cUIq9L3Q&usqp=CAU",
        },
        {
          day: "Wednesday's",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Thursday's",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Friday's",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Saturday's",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Sunday's",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
      ].map(({ day, image, promo }) => (
        <div
          key={day}
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "8px",
            borderBottom: "1px solid white",
            padding: "0 0 12px 0",
          }}
        >
          <div>
            <h1>{day}</h1>
          </div>
          <div
            style={{
              display: "flex",
              margin: "8px",
              justifyContent: "space-between",
            }}
          >
            <img
              src={image}
              alt="promo"
              style={{
                width: "100%",
                borderRadius: "10px",
                maxWidth: "200px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <h1>{promo?.offer}</h1>
              <p style={{ fontSize: "14px" }}>{promo?.item}</p>
              <StyledButton color="primary" variant="outlined">
                Add
              </StyledButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarTab;
