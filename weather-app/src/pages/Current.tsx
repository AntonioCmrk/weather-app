import { Card, Col, Radio, RadioChangeEvent, Row, Space } from "antd";
import { useState } from "react";
import "./Current.css";
import { WeatherUnitConvert } from "../types";
import { WeatherProperties } from "../components/WeatherProperties";

export const Current = ({
  weatherData,
  unit,
  convertToF,
}: WeatherUnitConvert) => {
  return weatherData?.code === "ERR_BAD_REQUEST" || weatherData === null ? (
    <h1>Please enter valid city name</h1>
  ) : (
    <div>
      <Col span={20} offset={2}>
        <Card
          title={weatherData.resolvedAddress}
          style={{ marginBottom: "5rem" }}
        >
          <Row justify="space-around" align="middle">
            <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  className="col"
                  src={require(`../assets/icons/${weatherData.currentConditions.icon}.svg`)}
                  height="150"
                  width="150"
                />
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "2rem",
                    }}
                  >
                    <img
                      className="col"
                      src={require(`../assets/temp-icon.png`)}
                      height="24"
                      width="24"
                    />
                    {unit === "C"
                      ? Math.round(weatherData.currentConditions.temp)
                      : Math.round(
                          convertToF(weatherData.currentConditions.temp)
                        )}
                    °{unit}
                  </div>
                  <div>
                    RealFeel{" "}
                    {unit === "C"
                      ? Math.round(weatherData.currentConditions.feelslike)
                      : Math.round(
                          convertToF(weatherData.currentConditions.feelslike)
                        )}
                    °{unit}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8}>
              <div
                style={{
                  padding: "3rem",
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                {weatherData.description}
              </div>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={8}
              xxl={8}
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              <Space direction="vertical" align="baseline">
                <WeatherProperties
                  title={"Wind speed"}
                  data={weatherData.currentConditions.windspeed}
                  icon={"wind-icon"}
                  unit={"km/h"}
                />
                <WeatherProperties
                  title={"Humidity"}
                  data={weatherData.currentConditions.humidity}
                  icon={"humidity-icon"}
                  unit={"%"}
                />
                <WeatherProperties
                  title={"Precipitation"}
                  data={weatherData.currentConditions.precip}
                  icon={"precipitation"}
                  unit={"%"}
                />
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
};
