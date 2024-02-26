import { Card, Col, Divider, Row, Space } from "antd";
import { WeatherProperties } from "./WeatherProperties";
import { HoursEntity, TSelectedHourFalse } from "../types";

export const SelectedHourFalse = ({
  weatherData,
  selectedDayDate,
  setSelectedHour,
  unit,
  convertToF,
}: TSelectedHourFalse) => {
  return (
    <div key={weatherData.code}>
      <Col span={20} offset={2}>
        <Card
          title={
            weatherData.resolvedAddress +
            ", " +
            selectedDayDate[2] +
            "." +
            selectedDayDate[1] +
            "." +
            selectedDayDate[0] +
            "."
          }
          style={{ marginBottom: "5rem" }}
        >
          {weatherData.days[0].hours.map((item: HoursEntity) => (
            <div key={item.datetime}>
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
    </div>
  );
};
