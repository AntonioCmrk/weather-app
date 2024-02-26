import { Card, Col, Divider, Row, Space } from "antd";
import { WeatherProperties } from "./WeatherProperties";
import { DaysEntity, TSelectedDayFalse } from "../types";

export const SelectedDayFalse = ({
  weatherData,
  setSelectedDay,
  setSelectedDayDate,
  formatDate,
  unit,
  convertToF,
}: TSelectedDayFalse) => {
  return (
    <Col span={20} offset={2}>
      <Card
        title={weatherData.resolvedAddress}
        style={{ marginBottom: "5rem" }}
      >
        {weatherData.days.map((item: DaysEntity) => (
          <div key={item.datetime}>
            {weatherData.days[0] === item ? null : <Divider />}
            <Row
              className="selectable"
              justify="space-around"
              align="middle"
              onClick={() => {
                setSelectedDay(item);
                setSelectedDayDate(item.datetime.split("-"));
              }}
              style={{ cursor: "pointer" }}
            >
              <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={2}>
                {formatDate(item.datetime)}
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
                <Space direction="vertical" align="baseline">
                  <Row>
                    <Space>
                      <img
                        className="col"
                        src={require(`../assets/maxtemp-icon.png`)}
                        height="24"
                        width="24"
                      />
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.3rem",
                        }}
                      >
                        Max temp:{" "}
                        {unit === "C"
                          ? Math.round(item.tempmax)
                          : Math.round(convertToF(item.tempmax))}
                        °{unit}
                      </span>
                    </Space>
                  </Row>
                  <Row>
                    <Space>
                      <img
                        className="col"
                        src={require(`../assets/mintemp-icon.png`)}
                        height="24"
                        width="24"
                      />
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.3rem",
                        }}
                      >
                        Min temp:{" "}
                        {unit === "C"
                          ? Math.round(item.tempmin)
                          : Math.round(convertToF(item.tempmin))}
                        °{unit}
                      </span>
                    </Space>
                  </Row>
                </Space>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.description}
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
                <Space direction="vertical" align="baseline">
                  <WeatherProperties
                    title={"Wind speed"}
                    data={item.windspeed}
                    icon={"wind-icon"}
                    unit={"km/h"}
                  />
                  <WeatherProperties
                    title={"Humidity"}
                    data={item.humidity}
                    icon={"humidity-icon"}
                    unit={"%"}
                  />
                  <WeatherProperties
                    title={"Precipitation"}
                    data={item.precip}
                    icon={"precipitation"}
                    unit={"%"}
                  />
                </Space>
              </Col>
            </Row>
          </div>
        ))}
      </Card>
    </Col>
  );
};
