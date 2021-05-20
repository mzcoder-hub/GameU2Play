import React, { lazy } from "react";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown /> {/* TOP STATISTIC  */}
      <WidgetsBrand withCharts />
    </>
  );
};

export default Dashboard;
