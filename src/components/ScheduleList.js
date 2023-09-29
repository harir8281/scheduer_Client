import React, { useEffect, useState } from "react";
import axios from "axios";
import ScheduleCard from "./ScheduleCard";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/get")
      .then((response) => {
        const fetchedSchedules = response.data.Schedules;
        setSchedules(fetchedSchedules);
      })
      .catch((error) => {
        console.error(
          "Error fetching data from the first API endpoint:",
          error
        );
      });
  }, []);

  // Helper function to chunk the array into pairs
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  return (
    <div>
      <div className="schedule-list">
        {chunkArray(schedules, 2).map((row, index) => (
          <div key={index} className="schedule-row">
            {row.map((schedule) => (
              <ScheduleCard key={schedule.Name} schedule={schedule} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleList;
