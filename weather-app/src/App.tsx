import { useEffect, useState } from "react";
import "./App.css";
import { Layout, Radio, RadioChangeEvent } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import NavigationBar from "./components/NavigationBar";
import MyFooter from "./components/Footer";
import NavigationRoutes from "./components/NavigationRoutes";
import { SearchPlace } from "./components/SearchPlace";
import weather from "./assets/weather_example.json";
import { SearchData, TempC, Unit, Weather } from "./types";
import { contentStyle, footerStyle, layoutStyle } from "./Styles";
import { fetchWeather } from "./api/WeatherAPI";

function App() {
  const [place, setPlace] = useState<string | null>("Osijek");
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [unit, setUnit] = useState<Unit>("C");

  useEffect(() => {
    //setWeatherData(weather);
    fetchWeather(place)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setWeatherData(err);
      });
  }, [place]);

  const handleOnSearchChange = (searchData: SearchData) => {
    if (searchData !== null) {
      setPlace(searchData.value);
    }
  };

  const convertToF = (tempC: TempC) => {
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
          onChange={({ target: { value } }: RadioChangeEvent) => {
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
