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
        console.error("Error fetching data from the API endpoint:", error);
      });
  }, []);

  // Helper function to chunk the array into rows
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  // Calculate the number of columns you want
  const numberOfColumns = 2;

  // Use CSS to style the rows
  const rowStyle = {
    display: "flex",
  };

  return (
    <div className="schedule-list-container" style={{ height: "400px", overflowY: "auto" }}>
      {chunkArray(schedules, numberOfColumns).map((row, rowIndex) => (
        <div key={rowIndex} style={rowStyle}>
          {row.map((schedule) => (
            <ScheduleCard key={schedule.Name} schedule={schedule} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
