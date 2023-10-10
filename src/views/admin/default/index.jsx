import MiniCalendar from "components/calendar/MiniCalendar";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import TopFlavors from "views/admin/default/components/TopFlavors";

import { IoPeopleSharp } from "react-icons/io5";
import { MdBarChart, MdShoppingCart } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
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

      {/* Charts */}

      <div className="mt-5 grid grid-cols-4 items-stretch gap-5">
        <div className="col-span-3 items-stretch">
          <TotalSpent />
        </div>
        <TopFlavors />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
