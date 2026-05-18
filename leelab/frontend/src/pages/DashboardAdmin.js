import { useEffect, useState } from "react";
import API from "../services/api";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function DashboardAdmin() {
  const [stats, setStats] = useState({
    people: 0,
    publications: 0,
    requests: 0,
    contacts: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const [pRes, pubRes, reqRes, conRes] = await Promise.all([
          API.get("/people"),
          API.get("/publications"),
          API.get("/materials"),
          API.get("/contact"),
        ]);

        setStats({
          people: pRes.data.length,
          publications: pubRes.data.length,
          requests: reqRes.data.length,
          contacts: conRes.data.length,
        });

        // Simple chart: requests over time (by date)
        const ctx = document.getElementById("reqChart");
        if (ctx) {
          const byDate = {};

          reqRes.data.forEach((r) => {
            const d = new Date(r.createdAt).toLocaleDateString();
            byDate[d] = (byDate[d] || 0) + 1;
          });

          const labels = Object.keys(byDate);
          const data = Object.values(byDate);

          // Destroy existing chart instance if any
          if (ctx._chartInstance) {
            ctx._chartInstance.destroy();
          }

          const chart = new Chart(ctx, {
            type: "line",
            data: {
              labels,
              datasets: [
                {
                  label: "Material Requests",
                  data,
                },
              ],
            },
          });

          ctx._chartInstance = chart;
        }
      } catch (err) {
        console.error("Error loading dashboard stats", err);
      }
    }

    loadStats();
  }, []);

  return (
    <>
      <h1 className="fw-bold mb-4">Admin Dashboard</h1>

      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h3>{stats.people}</h3>
            <p className="text-muted">People</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h3>{stats.publications}</h3>
            <p className="text-muted">Publications</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h3>{stats.requests}</h3>
            <p className="text-muted">Material Requests</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h3>{stats.contacts}</h3>
            <p className="text-muted">Contact Messages</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Material Requests Over Time</h4>
        <canvas id="reqChart" height="100"></canvas>
      </div>
    </>
  );
}
