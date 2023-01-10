import { Divider } from "@mui/material";
import React from "react";
import EventCard from "./EventCard";
import arrow from "../img/arrow.jpg";

const InterestInBlog = ({ subtopic1 }) => {
  const stylesCardCloserEvents = {
    minHeight: "427px",
    minWwidth: "550px",
    margin: "10px",
    border: 'none',
    boxShadow: 'none'
  };
  return (
    <div>
      <div className="mainPageCulturalEvents">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

          }}
        >
          <div>
            <h3 className="title-h3">{subtopic1}</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: '16px',
                color: '#2E89DC',
                margin: 0,
                paddingRight: '14px',
                lineHeight: '19px',

              }}
            >
              Все статьи
            </p>
            <img
              style={{
                background: "#2E89DC",
                gap: 30,
                width: 15,
                height: 25,
              }}
              src={arrow}
              alt="Далее на все статьи"
            />
          </div>
        </div>
        <Divider classes={{ root: "mydivider" }} />
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <EventCard styles={stylesCardCloserEvents} />

            <EventCard styles={stylesCardCloserEvents} />
            <EventCard styles={stylesCardCloserEvents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestInBlog;
