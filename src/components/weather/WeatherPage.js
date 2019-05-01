import React from "react";

const WeatherPage = () => {
  return (
    <>
      <h1>Weather Page</h1>
      <div>
        <p>
          Our plan is to have a live feed of data from our own weather station
          which is situated on Misty Valley. However, the weather station is
          undergoing repairs. Until that is done, please enjoy the following,
          courtesy of{" "}
          <a
            href="https://weatherwidget.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            weatherwidget.io
          </a>
          .
        </p>
      </div>
      <div>
        <a
          className="weatherwidget-io"
          href="https://forecast7.com/en/n29d0530d61/greytown/"
          data-label_1="GREYTOWN"
          data-theme="mountains"
        >
          Greytown Weather
        </a>
      </div>
    </>
  );
};

/**
 * 

 * 
 */

export default WeatherPage;
