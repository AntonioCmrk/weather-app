import { useState } from "react";
import "./Hourly.css";
import { Button, Card, Col, Divider, Row, Space } from "antd";
import { LeftOutlined } from "@ant-design/icons";

interface IHourly {
  datetime: string;
  icon: string;
  temp: number;
  feelslike: number;
  conditions: string;
  windspeed: string;
  humidity: string;
  precip: string;
}

export const Hourly = ({ weatherData, unit, convertToF }: any) => {
  const [selectedHour, setSelectedHour] = useState<IHourly | null>(null);
  const date =
    weatherData?.code === "ERR_BAD_REQUEST" || weatherData === null
      ? null
      : weatherData.days[0].datetime.split("-");
  return weatherData?.code === "ERR_BAD_REQUEST" || weatherData === null ? (
    <h1>Please enter valid city name</h1>
  ) : selectedHour === null ? (
    <div>
      <Col span={20} offset={2}>
        <Card
          title={
            weatherData.resolvedAddress +
            ", " +
            date[2] +
            "." +
            date[1] +
            "." +
            date[0] +
            "."
          }
          style={{ marginBottom: "5rem" }}
        >
          {weatherData.days[0].hours.map((item: any) => (
            <>
              {weatherData.days[0].hours[0] === item ? null : <Divider />}
              <Row
                className="selectable"
                justify="space-around"
                align="middle"
                onClick={() => setSelectedHour(item)}
                style={{ cursor: "pointer" }}
              >
                <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={2}>
                  {item.datetime.slice(0, 5)}
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={4}>
                  <img
                    className="col"
                    src={require(`../assets/icons/${item.icon}.svg`)}
                    height="150"
                    width="150"
                  />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
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
                      ? Math.round(item.temp)
                      : Math.round(convertToF(item.temp))}
                    °{unit}
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.7rem",
                    }}
                  >
                    {item.conditions}
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
                  <Space direction="vertical" align="baseline">
                    <Row>
                      <Space>
                        <img
                          className="col"
                          src={require(`../assets/wind-icon.png`)}
                          height="24"
                          width="24"
                        />
                        <span>Wind speed: {item.windspeed}km/h</span>
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
                        <span>Humidity: {item.humidity}%</span>
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
                        <span>Precipitation: {item.precip}%</span>
                      </Space>
                    </Row>
                  </Space>
                </Col>
              </Row>
            </>
          ))}
        </Card>
      </Col>
    </div>
  ) : (
    <>
      <Col span={20} offset={2}>
        <Button
          onClick={() => setSelectedHour(null)}
          style={{ marginBottom: "3rem" }}
        >
          <LeftOutlined /> Back
        </Button>
      </Col>
      <Col span={20} offset={2}>
        <Card
          title={
            weatherData.resolvedAddress +
            ", " +
            date[2] +
            "." +
            date[1] +
            "." +
            date[0] +
            "., " +
            selectedHour.datetime.slice(0, 5) +
            "h"
          }
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
                  src={require(`../assets/icons/${selectedHour.icon}.svg`)}
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
                      ? Math.round(selectedHour.temp)
                      : Math.round(convertToF(selectedHour.temp))}
                    °{unit}
                  </div>
                  <div>
                    RealFeel{" "}
                    {unit === "C"
                      ? Math.round(selectedHour.feelslike)
                      : Math.round(convertToF(selectedHour.feelslike))}
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
                {selectedHour.conditions}
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
                      Wind speed: {selectedHour.windspeed}
                      km/h
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
                    <span>Humidity: {selectedHour.humidity}%</span>
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
                    <span>Precipitation: {selectedHour.precip}%</span>
                  </Space>
                </Row>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};
