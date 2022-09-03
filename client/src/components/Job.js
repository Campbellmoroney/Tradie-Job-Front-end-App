import "./Job.css";
// import { Link } from "react-router-dom";

const Job = ({ title, status, date_created, client_name, client_email }) => {
  return (
    <li className="job_container">
      <h3 className="job_title">{title}</h3>
      <span className="status">{status}</span>
      <span className="date_created">{date_created}</span>
      <span className="client_name">{client_name}</span>
      <span className="client_email">{client_email}</span>
    </li>
  );
};
export default Job;
