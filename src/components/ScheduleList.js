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

        // Fetch and combine data from the second API endpoint for each schedule
        Promise.all(
          fetchedSchedules.map((schedule) => {
            const apiUrl = `http://localhost:5002/get?name=${schedule.Name}`;
            console.log(apiUrl);
            return axios
              .get(apiUrl)
              .then((secondApiResponse) => {
                // Extract data from the second API response
                const secondApiData = secondApiResponse.data;

                // Ensure properties exist before accessing them
                const scheduleExpression =
                  secondApiData.ScheduleExpression || "";
                const inputData = secondApiData.Target
                  ? JSON.stringify(secondApiData.Target.Input || "{}")
                  : {};

                // Combine data from both API responses
                const combinedData = {
                  Name: schedule.Name,
                  ScheduleExpression: scheduleExpression,
                  Email: inputData.datas ? inputData.datas.email || "" : "",
                  Message: inputData.datas ? inputData.datas.message || "" : "",
                  Time: inputData.datas ? inputData.datas.time || "" : "",
                  Status: inputData.datas ? inputData.datas.status || "" : "",
                  RetryPolicy: secondApiData.Target
                    ? secondApiData.Target.RetryPolicy || {}
                    : {},
                };

                return combinedData;
              })
              .catch((error) => {
                console.error(
                  `Error fetching data for ${schedule.Name}:`,
                  error
                );
                return null; // Return null if there's an error
              });
          })
        )
          .then((updatedSchedules) => {
            // Handle the updated schedules as needed
            // console.log('Updated Schedules:', updatedSchedules);
          })
          .catch((error) => {
            console.error(
              "Error fetching data from the second API endpoint:",
              error
            );
          });
      })
      .catch((error) => {
        console.error(
          "Error fetching data from the first API endpoint:",
          error
        );
      });
  }, []);

  return (
    <div>
      <div className="schedule-list">
        {schedules.map((schedule) => (
          <ScheduleCard key={schedule.Name} schedule={schedule} />
        ))}
      </div>
    </div>
  );
};

export default ScheduleList;
