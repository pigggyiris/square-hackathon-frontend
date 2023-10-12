import MiniCalendar from "components/calendar/MiniCalendar";
import Revenue from "views/admin/default/components/Revenue";
import TopFlavors from "views/admin/default/components/TopFlavors";
import HiringQuestion from "./components/HiringQuestion";

import { IoPeopleSharp } from "react-icons/io5";
import { MdBarChart, MdShoppingCart, MdStickyNote2 } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import { PricingStrategyTable } from "./components/PricingStrategyTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import CampaignIdea from "views/admin/default/components/CampaignIdea";
import EmailPromo from "views/admin/default/components/EmailPromo";

import TaskCard from "views/admin/default/components/TaskCard";
import tableDataComplex from "./variables/tableDataComplex.json";
import { searchQuestion } from "./services/hiringService";
import { useState } from "react";

const Dashboard = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  return (
    <div>
      <div className="mt-8 grid grid-cols-1 gap-5 font-sans md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7 text-fall-600" />}
          title={"Earning this month"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<MdShoppingCart className="h-6 w-6 text-fall-600" />}
          title={"Sales this month"}
          subtitle={"1289"}
        />
        <Widget
          icon={<IoPeopleSharp className="h-7 w-7 text-fall-600" />}
          title={"New clients"}
          subtitle={"583"}
        />

        <Widget
          icon={<MdStickyNote2 className="h-7 w-7 text-fall-600" />}
          title={"New Tasks"}
          subtitle={"50"}
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
          <EmailPromo />
        </div>
      </div>

      <h1 className="ml-4 mt-5 font-sans text-xl font-bold text-fall-50 ">
        Inventory
      </h1>
      <div className="mt-2 grid grid-cols-1 gap-5 font-sans xl:grid-cols-6">
        <div className="xl:col-span-4">
          <ComplexTable setTodos={setTodos} todos={todos}/>
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
        <HiringQuestion
        />

     
      </div>
    </div>
  );
};

export default Dashboard;
