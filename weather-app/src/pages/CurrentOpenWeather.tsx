import { Radio, RadioChangeEvent, Space } from "antd";
import { useState } from "react";
import "./Current.css";

export const Current = ({ weatherData }: any) => {
  const [degreeUnit, setDegreeUnit] = useState<"C" | "F">("C");

  return weatherData?.code === "ERR_BAD_REQUEST" || weatherData === null ? (
    <h1>Please enter valid city name</h1>
  ) : (
    <div className="current">
      <div className="container">
        <div className="box" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Current Weather
        </div>
        <div className="box" style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {weatherData?.name}
        </div>
        <div className="box">
          <Radio.Group
            options={[
              { label: "C", value: "C" },
              { label: "F", value: "F" },
            ]}
            onChange={({ target: { value } }: RadioChangeEvent) => {
              setDegreeUnit(value);
            }}
            value={degreeUnit}
            optionType="button"
          />
        </div>
      </div>
      <div className="container">
        <div className="img-temp box">
          <img
            src={require(`../assets/${weatherData?.weather[0]?.icon}.png`)}
            height="150"
            width="150"
          />
          <div style={{ marginLeft: "2rem" }}>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "-5.5rem",
              }}
            >
              {degreeUnit === "C"
                ? Math.round(Number(weatherData?.main?.temp))
                : Math.round(Number(weatherData?.main?.temp) * (9 / 5) + 32)}
              °{degreeUnit}
            </div>
            <div style={{ fontSize: "1rem", marginTop: "-5.5rem" }}>
              <span>RealFeel </span>
              {degreeUnit === "C"
                ? Math.round(Number(weatherData?.main?.feels_like))
                : Math.round(
                    Number(weatherData?.main?.feels_like) * (9 / 5) + 32
                  )}
              °{degreeUnit}
            </div>
          </div>
        </div>

        <div className="box" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          {(weatherData?.weather[0]?.description).charAt(0).toUpperCase() +
            (weatherData?.weather[0]?.description).slice(1)}
        </div>
        <div className="box wind-humidity">
          <div
            style={{
              fontSize: "1rem",
              marginBottom: "-2rem",
              marginLeft: "2rem",
            }}
          >
            <img
              src={require("../assets/wind-icon.png")}
              alt="wind-icon"
              height="32"
            />
            <span style={{ marginLeft: "1rem", marginTop: "-10rem" }}>
              {degreeUnit === "C"
                ? weatherData?.wind?.speed + " km/h"
                : Math.round((weatherData?.wind?.speed / 1.609344) * 100) /
                    100 +
                  " mph"}
            </span>
          </div>
          <div
            style={{
              fontSize: "1rem",
              marginTop: "-2rem",
            }}
          >
            <img
              src={require("../assets/humidity-icon.png")}
              alt="humidity-icon"
              height="28"
            />
            <span style={{ marginLeft: "1rem" }}>
              {weatherData?.main?.humidity}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
