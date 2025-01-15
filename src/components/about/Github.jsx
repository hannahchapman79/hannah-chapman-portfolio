import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {

  const selectSixMonths = contributions => {
    const today = new Date();
    const sixMonthsAgo = new Date(today);
    sixMonthsAgo.setMonth(today.getMonth() - 6);
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      return date >= sixMonthsAgo && date <= today;
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
        transformData={selectSixMonths}
        blockSize={18}
        blockMargin={15}
        color="#4A90E2"
        fontSize={16}
        labels={{
          totalCount: '{{count}} contributions in the last 6 months',
        }}
      />
    </Row>
    </section>
  );
}

export default Github;