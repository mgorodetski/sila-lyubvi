import { Divider } from "@mui/material";
import React from "react";
import EventCard from "./EventCard";
import Carousel from "react-slick";
import CustomButton from "./CustomButton";

const Events = ({ topic, subtopic1, subtopic2, discription, buttonTitle }) => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <button className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }
  const stylesCardImportantEvents = {
    minHeight: "640px",
    minWwidth: "670px",
    margin: "10px",
  };
  const stylesCardCloserEvents = {
    minHeight: "427px",
    minWwidth: "550px",
    margin: "10px",
  };
  return (
    <div>
      <div className="mainPageCulturalEvents">
        <div>
          <h2 className="title-h2">
            {topic.word}{" "}
            <span className="gradientText">{topic.wordGradient}</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ width: "50%", fontSize: "28px", margin: 0 }}>
            {discription.discription}
          </p>
          <p
            style={{
              width: "50%",
              fontSize: "18px",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {discription.discription2}
          </p>
        </div>
        <h3 className="title-h3">{subtopic1}</h3>

        <Divider classes={{ root: "mydivider" }} />
        <div className="carouselWrapper">
          <Carousel
            // dots={true}
            infinite={true}
            speed={500}
            slidesToShow={2}
            slidesToScroll={1}
            className={"center"}
            display="true"
            centerMode={true}
            centerPadding={"0px"}
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
          >
            <EventCard styles={stylesCardImportantEvents} />

            <EventCard styles={stylesCardImportantEvents} />
            <EventCard styles={stylesCardImportantEvents} />
            <EventCard styles={stylesCardImportantEvents} />
            <EventCard styles={stylesCardImportantEvents} />
          </Carousel>
        </div>

        <h3 className="title-h3">{subtopic2}</h3>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              title={buttonTitle}
              style={{
                width: "261px",
                height: "61px",
                fontWeight: "500px",
                lineHeight: "17px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
