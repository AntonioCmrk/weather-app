import { LeftOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Row, Space } from "antd";
import { useState } from "react";
import { DaysEntity, HoursEntity, IDaily, WeatherUnitConvert } from "../types";
import { WeatherProperties } from "../components/WeatherProperties";
import { SelectedHourFalse } from "../components/SelectedHourFalse";
import SelectedHour from "../components/SelectedHour";
import { SelectedDayFalse } from "../components/SelectedDayFalse";

export const Daily = ({
  weatherData,
  unit,
  convertToF,
}: WeatherUnitConvert) => {
  const [selectedDay, setSelectedDay] = useState<DaysEntity | null>(null);
  const [selectedHour, setSelectedHour] = useState<HoursEntity | null>(null);
  const [selectedDayDate, setSelectedDayDate] = useState<string[]>([]);

  const formatDate = (date: string) => {
    const splitedDate = date.split("-");
    return splitedDate[2] + "." + splitedDate[1] + "." + splitedDate[0] + ".";
  };
  return weatherData?.code === "ERR_BAD_REQUEST" || weatherData === null ? (
    <h1>Please enter valid city name</h1>
  ) : selectedDay === null ? (
    <SelectedDayFalse
      weatherData={weatherData}
      setSelectedDay={setSelectedDay}
      setSelectedDayDate={setSelectedDayDate}
      formatDate={formatDate}
      unit={unit}
      convertToF={convertToF}
    />
  ) : selectedHour === null ? (
    <div>
      <Col span={20} offset={2}>
        <Button
          onClick={() => setSelectedDay(null)}
          style={{ marginBottom: "3rem" }}
        >
          <LeftOutlined /> Back
        </Button>
      </Col>
      <SelectedHourFalse
        weatherData={weatherData}
        selectedDayDate={selectedDayDate}
        setSelectedHour={setSelectedHour}
        unit={unit}
        convertToF={convertToF}
      />
    </div>
  ) : (
    <SelectedHour
      weatherData={weatherData}
      selectedHour={selectedHour}
      selectedDayDate={selectedDayDate}
      setSelectedHour={setSelectedHour}
      unit={unit}
      convertToF={convertToF}
    />
  );
};
