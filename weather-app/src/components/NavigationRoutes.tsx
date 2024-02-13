import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import { Current, Hourly, Daily } from "../pages";

const NavigationRoutes = ({ weatherData, unit, convertToF }: any) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/current" />} />
        <Route
          path="/current"
          element={
            <Current
              weatherData={weatherData}
              unit={unit}
              convertToF={convertToF}
            />
          }
        />
        <Route
          path="/hourly"
          element={
            <Hourly
              weatherData={weatherData}
              unit={unit}
              convertToF={convertToF}
            />
          }
        />
        <Route
          path="/daily"
          element={
            <Daily
              weatherData={weatherData}
              unit={unit}
              convertToF={convertToF}
            />
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default NavigationRoutes;
