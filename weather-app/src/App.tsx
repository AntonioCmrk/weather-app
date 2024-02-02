import React, { useEffect, useState } from "react";
import "./App.css";
import { Layout, Select } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import NavigationBar from "./components/NavigationBar";
import MyFooter from "./components/Footer";
import NavigationRoutes from "./components/NavigationRoutes";
import Search from "antd/es/input/Search";
import type { SearchProps } from "antd/es/input/Search";
import axios from "axios";
import weather from "./assets/weather_example.json";

const APIKey2 = "16d9bb2e385b3eb15c7c30e7349e44b6";
const APIKey = "9B6QVFSDBPLEPQ6JQK7K4ADRA";

function App() {
  const [place, setPlace] = useState<string>("Osijek");
  const [searchValue, setSearchValue] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/?unitGroup=metric&key=${APIKey}`
        //`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${APIKey2}`
      )
      .then((response) => {
        setWeatherData(response.data);
        //setWeatherData(weather);
      })
      .catch((err) => {
        console.log(err);
        setWeatherData(err);
      });
  }, [place]);
  console.log("weatherData", weatherData);

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    background:
      "radial-gradient(circle, rgb(252, 250, 250) 0%, rgb(100, 100, 100) 100%)",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: "auto",
    backgroundColor: "#2b2b2b",
    color: "#c9c9c9",
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
  };

  const onSearch: SearchProps["onSearch"] = (value) => {
    setPlace(searchValue);
    setSearchValue("");
  };

  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <NavigationBar />
        <Content style={contentStyle}>
          <Search
            placeholder="Search city..."
            allowClear
            onSearch={onSearch}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{ width: "50%", marginTop: "2rem" }}
          />

          <NavigationRoutes weatherData={weatherData} />
        </Content>
        <Footer style={footerStyle}>
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
