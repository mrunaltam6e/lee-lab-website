import { useState } from "react";
import API from "../services/api";

export default function RequestMaterials() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");

      await API.post("/materials", {
        itemName,
        quantity,
        reason,
      });

      setSuccess("✅ Material request submitted successfully!");
      setItemName("");
      setQuantity("");
      setReason("");
    } catch (err) {
      setError(err.response?.data?.message || "❌ Failed to submit request");
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">Request Materials</h2>

      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Item Name</label>
          <input
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Quantity</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Reason</label>
          <textarea
            className="form-control"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit Request
        </button>
      </form>
    </div>
  );
}
