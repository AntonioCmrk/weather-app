import React, { useEffect, useState } from "react";
import "./App.css";
import { Layout, Radio } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import NavigationBar from "./components/NavigationBar";
import MyFooter from "./components/Footer";
import NavigationRoutes from "./components/NavigationRoutes";
import { SearchPlace } from "./components/SearchPlace";
import type { SearchProps } from "antd/es/input/Search";
import axios from "axios";
import weather from "./assets/weather_example.json";

const APIKey2 = "16d9bb2e385b3eb15c7c30e7349e44b6";
const APIKey = "9B6QVFSDBPLEPQ6JQK7K4ADRA";

function App() {
  const [place, setPlace] = useState<string>("Osijek");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [unit, setUnit] = useState<"C" | "F">("C");

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

  const handleOnSearchChange = (searchData: any) => {
    setPlace(searchData.value);
    console.log(searchData);
  };

  const convertToF = (tempC: any) => {
    return (tempC * 9) / 5 + 32;
  };

  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <NavigationBar />
        <Radio.Group
          options={[
            { label: "C", value: "C" },
            { label: "F", value: "F" },
          ]}
          onChange={({ target: { value } }: any) => {
            setUnit(value);
          }}
          value={unit}
          optionType="button"
          style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
          buttonStyle="solid"
        />
        <Content style={contentStyle}>
          <SearchPlace onSearchChange={handleOnSearchChange} />
          <NavigationRoutes
            weatherData={weatherData}
            unit={unit}
            convertToF={convertToF}
          />
        </Content>
        <Footer style={footerStyle}>
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
