import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Menu
        mode="horizontal"
        onClick={({ key }) => {
          navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Current", key: "/current" },
          {
            label: "Hourly",
            key: "/hourly",
          },
          {
            label: "Daily",
            key: "/daily",
          },
        ]}
      />
    </div>
  );
};

export default NavigationBar;
