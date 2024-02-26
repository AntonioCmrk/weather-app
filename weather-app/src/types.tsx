export interface Weather {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: DaysEntity[];
  alerts?: null[] | null;
  stations: Stations;
  currentConditions: CurrentConditions;
  code?: string;
}

export interface DaysEntity {
  datetime: string;
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  feelslike: number;
  dew: number;
  humidity: number;
  precip: number;
  precipprob: number;
  precipcover: number;
  preciptype?: string[] | null;
  snow: number;
  snowdepth: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  cloudcover: number;
  visibility: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  stations?: string[] | null;
  source: string;
  hours: HoursEntity[];
}

export interface HoursEntity {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype?: string[] | null;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  conditions: string;
  icon: string;
  stations?: string[] | null;
  source: string;
}
export interface Stations {
  F5214: F5214OrLDOSOrLHPP;
  LDOS: F5214OrLDOSOrLHPP;
  LHPP: F5214OrLDOSOrLHPP;
}

export interface F5214OrLDOSOrLHPP {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
}

export interface CurrentConditions {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype?: null;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  conditions: string;
  icon: string;
  stations?: string[] | null;
  source: string;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
}

export type TempC = number;

export type Unit = "C" | "F";

export interface Place {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionWdId: string;
  latitude: number;
  longitude: number;
  population: number;
}

export type WeatherUnitConvert = {
  weatherData: Weather | null;
  unit: Unit;
  convertToF: ConvertToFFunction;
};

export interface IHourly {
  datetime: string;
  icon: string;
  temp: number;
  feelslike: number;
  conditions: string;
  windspeed: string;
  humidity: string;
  precip: string;
}

export interface IDaily {
  datetime: string;
  icon: string;
  temp: number;
  feelslike: number;
  conditions: string;
  windspeed: string;
  humidity: string;
  precip: string;
}

export type TWeatherProperties = {
  title: string;
  data: number;
  icon: string;
  unit: string;
};

export type TSelectedHourFalse = {
  weatherData: Weather;
  selectedDayDate: string[] | "";
  setSelectedHour: React.Dispatch<React.SetStateAction<HoursEntity | null>>;
  unit: string;
  convertToF: ConvertToFFunction;
};
export type TSelectedHour = {
  weatherData: Weather;
  selectedDayDate: string[] | "";
  selectedHour: HoursEntity;
  setSelectedHour: React.Dispatch<React.SetStateAction<HoursEntity | null>>;
  unit: string;
  convertToF: ConvertToFFunction;
};
export type TSelectedDayFalse = {
  weatherData: Weather;
  setSelectedDay: React.Dispatch<React.SetStateAction<DaysEntity | null>>;
  setSelectedDayDate: React.Dispatch<React.SetStateAction<string[]>>;
  formatDate: FormatDateFunction;
  unit: string;
  convertToF: ConvertToFFunction;
};

type ConvertToFFunction = (tempC: TempC) => number;

type FormatDateFunction = (date: string) => string;

export interface SearchProps {
  onSearchChange: (data: SearchData) => void;
}

export type SearchData = { label: string | null; value: string | null } | null;
