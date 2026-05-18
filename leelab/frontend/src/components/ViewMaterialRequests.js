import { useEffect, useState } from "react";
import API from "../services/api";

export default function ViewMaterialRequests() {
  const [requests, setRequests] = useState([]);

  const load = async () => {
    try {
      const res = await API.get("/materials");   // ✅ Correct route
      setRequests(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to load material requests");
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">Material Requests (Admin)</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Reason</th>
            <th>User</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req) => (
            <tr key={req._id}>
              <td>{req.itemName}</td>
              <td>{req.quantity}</td>
              <td>{req.reason}</td>
              <td>{req.user?.name}</td>
              <td>{req.status}</td>
              <td>{new Date(req.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
