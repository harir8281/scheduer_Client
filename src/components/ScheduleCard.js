import React from "react";

const cardStyle = {
  border: "1px solid #ccc",
  padding: "16px",
  margin: "8px",
  borderRadius: "4px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

const ScheduleCard = ({ schedule }) => {
  return (
    <div style={cardStyle}>
      <strong>Name:</strong> {schedule.Name}
      <br />
      <strong>State:</strong> {schedule.State}
      <br />
      <strong>Creation Date:</strong> {schedule.CreationDate}
      <br />
      <strong>Last Modification Date:</strong> {schedule.LastModificationDate}
      <br />
      <strong>ScheduleExpression:</strong> {schedule.ScheduleExpression}
      <br />
      <strong>Status:</strong> {schedule.Status}
      <br />
      <strong>Retry Policy:</strong> {JSON.stringify(schedule.RetryPolicy)}
      <br />
    </div>
  );
};

export default ScheduleCard;
