import React from "react";

const cardStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  margin: "8px",
  borderRadius: "4px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  width: "400px", // Reduced width
  height: "100px",
  fontSize: "12px",
};

const labelStyle = {
  fontWeight: "bold",
  marginRight: "5px",
};

const ScheduleCard = ({ schedule }) => {
  return (
    <div style={cardStyle}>
      <div>
        <span style={labelStyle}>Name:</span> {schedule.Name}
      </div>
      <div>
        <span style={labelStyle}>State:</span> {schedule.State}
      </div>
      <div>
        <span style={labelStyle}>Creation Date:</span> {schedule.CreationDate}
      </div>
      <div>
        <span style={labelStyle}>Last Modification Date:</span>{" "}
        {schedule.LastModificationDate}
      </div>
      <div>
        <span style={labelStyle}>ScheduleExpression:</span>{" "}
        {schedule.ScheduleExpression}
      </div>
      <div>
        <span style={labelStyle}>Status:</span> {schedule.Status}
      </div>
      <div>
        <span style={labelStyle}>Retry Policy:</span>{" "}
        {JSON.stringify(schedule.RetryPolicy)}
      </div>
    </div>
  );
};

export default ScheduleCard;
