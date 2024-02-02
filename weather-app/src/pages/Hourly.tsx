import { Card, Col, Divider, Row, Space } from "antd";

export const Hourly = ({ weatherData }: any) => {
  const date =
    weatherData?.code === "ERR_BAD_REQUEST" || weatherData === null
      ? null
      : weatherData.days[0].datetime.split("-");
  return weatherData?.code === "ERR_BAD_REQUEST" || weatherData === null ? (
    <h1>Please enter valid city name</h1>
  ) : (
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
                justify="space-around"
                align="middle"
                onClick={() => alert("clicked")}
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
                    {Math.round(item.temp)}°C
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
  );
};
