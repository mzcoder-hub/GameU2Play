import React, { lazy, useEffect } from "react";
import { useSelector } from "react-redux";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const Dashboard = ({ history, location }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  return (
    <>
      <WidgetsDropdown /> {/* TOP STATISTIC  */}
      <WidgetsBrand withCharts />
    </>
  );
};

export default Dashboard;
