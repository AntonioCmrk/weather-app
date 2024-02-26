import axios from "axios";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c11de09264msh7db23a77cd0d361p1ca72bjsn6ae513b8f8cd",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/?unitGroup=metric&key=${APIKey}";

export const WEATHER_API_KEY = "9B6QVFSDBPLEPQ6JQK7K4ADRA";

export const fetchWeather = async (place: string | null) => {
  const response = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/?unitGroup=metric&key=${WEATHER_API_KEY}`
  );
  return response;
};
