import { Card, Col, Radio, RadioChangeEvent, Row, Space } from "antd";
import { useState } from "react";
import "./Current.css";

export const Current = ({ weatherData }: any) => {
  const [degreeUnit, setDegreeUnit] = useState<"C" | "F">("C");

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
                    {Math.round(weatherData.currentConditions.temp)}°C
                  </div>
                  <div>
                    RealFeel{" "}
                    {Math.round(weatherData.currentConditions.feelslike)}°C
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
                <Row>
                  <Space>
                    <img
                      className="col"
                      src={require(`../assets/wind-icon.png`)}
                      height="24"
                      width="24"
                    />
                    <span>
                      Wind speed: {weatherData.currentConditions.windspeed}km/h
                    </span>
                  </Space>
                </Row>
                <Row>
                  <Space>
                    <img
                      className="col"
                      src={require(`../assets/humidity-icon.png`)}
                      height="24"
                      width="24"
                    />
                    <span>
                      Humidity: {weatherData.currentConditions.humidity}%
                    </span>
                  </Space>
                </Row>
                <Row>
                  <Space>
                    <img
                      className="col"
                      src={require(`../assets/precipitation.png`)}
                      height="24"
                      width="24"
                    />
                    <span>
                      Precipitation: {weatherData.currentConditions.precip}%
                    </span>
                  </Space>
                </Row>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
};
