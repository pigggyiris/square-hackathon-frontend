import React, { useState, useEffect } from "react";
import Card from "components/card";
import axios from "axios";
import { BASE_URL } from "../../../../config";
import Loading from "./Loading";

const getNextMonth = () => {
  let today = new Date();
  return { month: 10, year: today.getFullYear() };
};

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const MiniCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(true);

  const { month, year } = getNextMonth();
  const days = daysInMonth(month, year);
  const firstDay = new Date(year, month).getDay();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/v1/salesInfo/social_media_plan/10`)
      .then((response) => {
        const data = response.data;

        const eventMap = {};
        data.forEach((item) => {
          const day = parseInt(item.Date.split("/")[1], 10);
          eventMap[day] = item.Plan;
        });

        setEvents(eventMap);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Card extra="!p-[20px] text-left h-96">
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex space-x-6 rounded bg-white p-4 text-gray-900 shadow">
            <div className="w-120">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-bold text-gray-900">
                  {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                    new Date(year, month)
                  )}{" "}
                  {year}
                </h2>
              </div>
              <div className="grid w-full grid-cols-7 gap-3 text-xs">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="flex items-center justify-center text-center font-medium"
                    >
                      {day}
                    </div>
                  )
                )}
                {[...Array(firstDay)].map((_, index) => (
                  <div
                    key={`blank-${index}`}
                    className="bg-transparent flex items-center justify-center"
                  ></div>
                ))}
                {[...Array(days)].map((_, index) =>
                  events[index + 1] ? (
                    <button
                      key={index}
                      className={`flex h-8 w-8 transform items-center justify-center rounded-sm text-sm font-bold transition-transform duration-200 focus:outline-none ${
                        selectedDate === index + 1
                          ? "bg-bone-500 text-fall-50"
                          : "bg-yellow-300 text-fiord-800 hover:scale-110"
                      }`}
                      onClick={() => setSelectedDate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ) : (
                    <div
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-sm bg-white text-sm font-bold text-gray-900"
                    >
                      {index + 1}
                    </div>
                  )
                )}
              </div>
            </div>
            {selectedDate && (
              <div className="flex h-80 w-60 items-center rounded bg-fall-50 p-4 text-left text-gray-900 shadow-lg">
                <p>{events[selectedDate]}</p>
              </div>
            )}
          </div>
        </>
      )}
    </Card>
  );
};

export default MiniCalendar;
