import "./Job.css";
import { Link } from "react-router-dom";

const Job = ({ title, status, date_created, client_name, client_email }) => {
  return (
    <Link to={"/jobpage"}>
      <li className="job-container">
        <h3 className="job-title">{title}</h3>
        <span className="status">{status}</span>
        <span className="client-name">{client_name}</span>
        <span className="client-email">{client_email}</span>
        <span className="date-created">{date_created}</span>
      </li>
    </Link>
  );
};
export default Job;
