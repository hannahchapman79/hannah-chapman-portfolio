import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {

  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <section className="github-contribution">
    <Row style={{ justifyContent: "center"}}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong>Code</strong>
      </h1>
      <GitHubCalendar
        username="hannahchapman79"
        transformData={selectLastHalfYear}
        blockSize={18}
        blockMargin={15}
        color="#4A90E2"
        fontSize={16}
      />
    </Row>
    </section>
  );
}

export default Github;