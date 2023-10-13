import MiniCalendar from "components/calendar/MiniCalendar";
import Revenue from "views/admin/default/components/Revenue";
import TopFlavors from "views/admin/default/components/TopFlavors";
import HiringQuestion from "./components/HiringQuestion";
import { IoPeopleSharp } from "react-icons/io5";
import { MdBarChart, MdShoppingCart, MdStickyNote2 } from "react-icons/md";
import Widget from "components/widget/Widget";
import { PricingStrategyTable } from "./components/PricingStrategyTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import CampaignIdea from "views/admin/default/components/CampaignIdea";
import MarketingPie from "views/admin/default/components/MarketingPie";
import TaskCard from "views/admin/default/components/TaskCard";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";

const Dashboard = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [data, setData] = useState({
    totalRevenue: 0,
    totalQuantity: 0,
    totalOrders: 0,
    dailyRevenue: 0,
  });

  const currentMonth = new Date().getMonth() + 1;
  useEffect(() => {
    axios
      .get(`${BASE_URL}/v1/salesInfo/sales_report_monthly/${currentMonth}`)
      .then((response) => {
        const { totalRevenue, totalQuantity, totalOrders, salesReportbyDay } =
          response.data;

        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const todayData = response.data.salesReportbyDay[currentDay - 1];
        const dailyRevenue = todayData ? todayData.totalRevenue : 0;

        setData({
          totalRevenue,
          totalQuantity,
          totalOrders,
          dailyRevenue,
        });

        console.log("Monthly Revenue:", totalRevenue);
        console.log("Daily Revenue:", dailyRevenue);
        console.log("today", currentDay);
        console.log("month:", currentMonth);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div className="mt-8 grid grid-cols-1 gap-5 font-sans md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7 text-fall-600" />}
          title={"Earnings this month"}
          subtitle={`$${data.totalRevenue}`}
        />
        <Widget
          icon={<MdShoppingCart className="h-6 w-6 text-fall-600" />}
          title={"Sales this month"}
          subtitle={`${data.totalQuantity}`}
        />
        <Widget
          icon={<IoPeopleSharp className="h-7 w-7 text-fall-600" />}
          title={"New clients"}
          subtitle={`${data.totalOrders}`}
        />

        <Widget
          icon={<MdStickyNote2 className="h-7 w-7 text-fall-600" />}
          title={"Earnings Today "}
          subtitle={`${data.dailyRevenue}`}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 font-sans md:grid-cols-4">
        <div className="md:col-span-3">
          <Revenue />
        </div>
        <div className="md:col-span-1">
          <TopFlavors />
        </div>
      </div>
      <h1 className="ml-4 mt-5 font-sans text-xl font-bold text-fall-50 ">
        Marketing
      </h1>
      <div className="mt-2 grid grid-cols-1 gap-5 font-sans xl:grid-cols-7">
        <div className="xl:col-span-4">
          <PricingStrategyTable />
        </div>
        <div className="xl:col-span-3">
          <MiniCalendar />
        </div>

        <div className="xl:col-span-4">
          <CampaignIdea />
        </div>
        <div className="xl:col-span-3">
          <MarketingPie />
        </div>
      </div>

      <h1 className="ml-4 mt-5 font-sans text-xl font-bold text-fall-50 ">
        Inventory
      </h1>
      <div className="mt-2 grid grid-cols-1 gap-5 font-sans xl:grid-cols-6">
        <div className="xl:col-span-4">
          <ComplexTable setTodos={setTodos} todos={todos} />
        </div>
        <div className="xl:col-span-2">
          <TaskCard todos={todos} setTodos={setTodos} />
        </div>
      </div>

      {/* Hiring Section */}
      <h4 className="ml-4 mt-5 font-sans text-xl font-bold text-fall-50 ">
        Hiring
      </h4>

      <div className="mt-2">
        <HiringQuestion />
      </div>
    </div>
  );
};

export default Dashboard;
