import { Button, Card, Col, Divider, Row, Space } from "antd";
import { WeatherProperties } from "./WeatherProperties";
import { LeftOutlined } from "@ant-design/icons";
import { TSelectedHour } from "../types";

function SelectedHour({
  weatherData,
  selectedDayDate,
  selectedHour,
  setSelectedHour,
  unit,
  convertToF,
}: TSelectedHour) {
  return (
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
            selectedDayDate[2] +
            "." +
            selectedDayDate[1] +
            "." +
            selectedDayDate[0] +
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
                <WeatherProperties
                  title={"Wind speed"}
                  data={selectedHour.windspeed}
                  icon={"wind-icon"}
                  unit={"km/h"}
                />
                <WeatherProperties
                  title={"Humidity"}
                  data={selectedHour.humidity}
                  icon={"humidity-icon"}
                  unit={"%"}
                />
                <WeatherProperties
                  title={"Precipitation"}
                  data={selectedHour.precip}
                  icon={"precipitation"}
                  unit={"%"}
                />
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
}

export default SelectedHour;
