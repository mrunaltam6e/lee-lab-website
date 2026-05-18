import { useEffect, useState } from "react";
import API from "../services/api";

export default function Teaching() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    API.get("/teaching").then((res) => setSchedule(res.data));
  }, []);

  return (
    <>
      <h1 className="fw-bold mb-4">Teaching</h1>

      <table className="table table-bordered shadow-sm">
        <thead className="table-light">
          <tr>
            <th>Course</th>
            <th>Semester</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {schedule.map((c) => (
            <tr key={c._id}>
              <td>{c.course}</td>
              <td>{c.semester}</td>
              <td>{c.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
