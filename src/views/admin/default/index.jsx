import MiniCalendar from "components/calendar/MiniCalendar";
import Revenue from "views/admin/default/components/Revenue";
import TopFlavors from "views/admin/default/components/TopFlavors";
import HiringQuestion from "./components/HiringQuestion";

import { IoPeopleSharp } from "react-icons/io5";
import { MdBarChart, MdShoppingCart } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import { PricingStrategyTable } from "./components/PricingStrategyTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import CampaignIdea from "views/admin/default/components/CampaignIdea";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataComplex from "./variables/tableDataComplex.json";
import { searchQuestion } from "./services/hiringService";
import { useState } from "react";

const Dashboard = () => {
  const [userQuestion, setUserQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const handleSearch = async () => {
    const response = await searchQuestion(userQuestion);
    setAnswer(response);
  };

  return (
    <div>
      <div className="mt-8 grid h-20 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7 text-fall-600" />}
          title={"Earninged this month"}
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
      </div>

      <div className="mt-5 grid grid-cols-4 items-stretch gap-5">
        <div className="col-span-3 items-stretch">
          <Revenue />
        </div>
        <TopFlavors />
      </div>

      <h1 className="mt-5 ml-4 text-xl font-bold text-fall-50 ">Marketing</h1>
      <div className="mt-5 grid grid-cols-8 items-stretch gap-5">
        <div className="col-span-3">
          <PricingStrategyTable />
        </div>

        <div className="col-span-3">
          <CampaignIdea
            userQuestion={userQuestion}
            setUserQuestion={setUserQuestion}
            handleSearch={handleSearch}
            answer={answer}
          />
        </div>

        <div className="col-span-2">
          <MiniCalendar />
        </div>
      </div>

      <h1 className="mt-5 ml-4 text-xl font-bold text-fall-50 ">Inventory</h1>
      <div className="mt-5 grid grid-cols-6 items-stretch gap-5">
        <div className="col-span-4">
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
        </div>
        <div className="col-span-2">
          <TaskCard />
        </div>
      </div>

      {/* Hiring Section */}
      <h4 className="mt-5 ml-4 text-xl font-bold text-fall-50 ">Hiring</h4>

      <div className="mt-5">
        <HiringQuestion
          userQuestion={userQuestion}
          setUserQuestion={setUserQuestion}
          handleSearch={handleSearch}
          answer={answer}
        />
      </div>
    </div>
  );
};

export default Dashboard;
