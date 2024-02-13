import React, { useState } from "react";
import Search from "antd/es/input/Search";
import { AsyncPaginate, Response } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api/WeatherAPI";

export const SearchPlace = ({ onSearchChange }: any) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue: any) => {
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((place: any) => {
            return {
              value: `${place.name}`,
              label: `${place.name}, ${place.countryCode}`,
            };
          }),
        };
      });
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "5rem auto",
      }}
    >
      <AsyncPaginate
        placeholder="Search for place..."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};
