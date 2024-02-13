import axios from "axios";

const APIKey = "16d9bb2e385b3eb15c7c30e7349e44b6";
const APIKey2 = "9B6QVFSDBPLEPQ6JQK7K4ADRA";

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
