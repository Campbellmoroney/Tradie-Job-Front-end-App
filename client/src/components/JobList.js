import Job from "./Job";
import React from "react";
import FilterForm from "../utils/FilterForm";

const JobList = ({ jobs, status, setStatus }) => {
  if (jobs.length === 0) {
    return (
      <>
        <p>No jobs found!</p>
      </>
    );
  }

  return (
    <div>
        <FilterForm status={status} setStatus={setStatus} />
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
