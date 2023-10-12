import React, { useState } from "react";
import Card from "components/card";

const getNextMonth = () => {
  let today = new Date();
  let nextMonth = today.getMonth() + 1;
  let year = today.getFullYear();
  if (nextMonth > 11) {
    nextMonth = 0;
    year += 1;
  }
  return { month: nextMonth, year };
};

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const MiniCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const events = {
    1: "Post a photo of a delicious iced mocha on Instagram with the caption 'It's October, which means it's time for iced mochas! Come on in and try our new seasonal flavor, the Pumpkin Spice Mocha.'",
    7: "Share a blog post about the history of iced mochas.",
    14: "Host a social media contest where users can post photos of their favorite iced mochas. The winner will receive a free gift card from your store.",
    21: "Offer a special discount on iced mochas to celebrate National Coffee Day.",
    28: "Post a video on YouTube showing how to make your own iced mocha at home.",
  };

  const { month, year } = getNextMonth();
  const days = daysInMonth(month, year);
  const firstDay = new Date(year, month).getDay();

  return (
    <Card extra="!p-[20px] text-left h-auto">
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
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="flex items-center justify-center text-center font-medium"
              >
                {day}
              </div>
            ))}
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
    </Card>
  );
};

export default MiniCalendar;
