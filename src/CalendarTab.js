import React from "react";

const CalendarTab = () => {
  return (
    <div style={{ color: "white" }}>
      {[
        {
          day: "Monday",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Tuesday",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Wednesday",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Thursday",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Friday",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Saturday",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
        {
          day: "Sunday",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrn2BzOfzHkMvG0K0g9GmTbXUeUqmor2i1A&usqp=CAU",
        },
      ].map(({ day, image }) => (
        <div
          key={day}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "8px 0" }}>
            <h1>{day}</h1>
          </div>
          <img src={image} alt="promo" />
        </div>
      ))}
    </div>
  );
};

export default CalendarTab;
