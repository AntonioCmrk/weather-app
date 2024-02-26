import { Row, Space } from "antd";
import { TWeatherProperties } from "../types";

export const WeatherProperties = ({
  title,
  data,
  icon,
  unit,
}: TWeatherProperties) => {
  return (
    <Row>
      <Space>
        <img
          className="col"
          src={require(`../assets/${icon}.png`)}
          height="24"
          width="24"
        />
        <span>
          {title}: {data}
          {unit}
        </span>
      </Space>
    </Row>
  );
};
