import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api/WeatherAPI";
import { Place, SearchData, SearchProps } from "../types";

export const SearchPlace = ({ onSearchChange }: SearchProps) => {
  const [search, setSearch] = useState<SearchData | null>(null);

  const handleOnChange = (searchData: SearchData | null) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue: string) => {
    return fetch(
      `${GEO_API_URL}/cities?limit=10&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return {
          options: response.data.map((place: Place) => {
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
