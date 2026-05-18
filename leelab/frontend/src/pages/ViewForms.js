import { useEffect, useState } from "react";
import API from "../services/api";

export default function ViewForms() {
  const [contact, setContact] = useState([]);
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setError("");
      const [conRes, reqRes] = await Promise.all([
        API.get("/contact"),     // GET /api/contact
        API.get("/materials"),   // GET /api/materials
      ]);

      setContact(conRes.data);
      setRequests(reqRes.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load form submissions");
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">Form Submissions</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* CONTACT MESSAGES */}
      <h4>Contact Messages</h4>
      <table className="table table-striped table-bordered mb-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.subject}</td>
              <td>{c.message}</td>
              <td>{new Date(c.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MATERIAL REQUESTS */}
      <h4>Material Requests</h4>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Reason</th>
            <th>Requested By</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((r) => (
            <tr key={r._id}>
              <td>{r.itemName}</td>
              <td>{r.quantity}</td>
              <td>{r.reason}</td>
              <td>
                {r.user?.name || "Unknown"}{" "}
                {r.user?.email && <span>({r.user.email})</span>}
              </td>
              <td>{r.status}</td>
              <td>{new Date(r.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
