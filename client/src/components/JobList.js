import Job from "./Job";
import React from "react";

const JobList = ({ jobs }) => {
  if (!Array.isArray(jobs)) {
    return (
      <>
        <p>No jobs found!</p>
      </>
    );
  }

  return (
    <div>
      <ul>
        {jobs.map((job) => {
          return (
            <Job
              key={job.id}
              title={job.title}
              status={job.status}
              date_created={job.date_created}
              client_name={job.client_name}
              client_email={job.client_email}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default JobList;
