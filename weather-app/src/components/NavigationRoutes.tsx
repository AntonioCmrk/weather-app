import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import { Current, Hourly, Daily } from "../pages";

const NavigationRoutes = ({ weatherData }: any) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/current" />} />
        <Route
          path="/current"
          element={<Current weatherData={weatherData} />}
        />
        <Route path="/hourly" element={<Hourly weatherData={weatherData} />} />
        <Route path="/daily" element={<Daily weatherData={weatherData} />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default NavigationRoutes;
