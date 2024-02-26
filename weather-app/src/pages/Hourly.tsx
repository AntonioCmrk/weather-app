import { useState } from "react";
import "./Hourly.css";
import { WeatherUnitConvert, HoursEntity } from "../types";
import { SelectedHourFalse } from "../components/SelectedHourFalse";
import SelectedHour from "../components/SelectedHour";

export const Hourly = ({
  weatherData,
  unit,
  convertToF,
}: WeatherUnitConvert) => {
  const [selectedHour, setSelectedHour] = useState<HoursEntity | null>(null);
  const date =
    weatherData?.code === "ERR_BAD_REQUEST" || weatherData === null
      ? ""
      : weatherData.days[0].datetime.split("-");
  return weatherData?.code === "ERR_BAD_REQUEST" || weatherData === null ? (
    <h1>Please enter valid city name</h1>
  ) : selectedHour === null ? (
    <SelectedHourFalse
      weatherData={weatherData}
      selectedDayDate={date}
      setSelectedHour={setSelectedHour}
      unit={unit}
      convertToF={convertToF}
    />
  ) : (
    <SelectedHour
      weatherData={weatherData}
      selectedHour={selectedHour}
      selectedDayDate={date}
      setSelectedHour={setSelectedHour}
      unit={unit}
      convertToF={convertToF}
    />
  );
};
