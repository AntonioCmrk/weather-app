import axios from "axios";

const APIKey = "16d9bb2e385b3eb15c7c30e7349e44b6";
const APIKey2 = "9B6QVFSDBPLEPQ6JQK7K4ADRA";

export const fetchCurrentWeather = ({ place }: any) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${APIKey}`
  );
};

export const fetchWeather = ({ place }: any) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${APIKey}`
  );
};
