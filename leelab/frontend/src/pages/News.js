import { useEffect, useState } from "react";
import API from "../services/api";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.get("/news").then((res) => setNews(res.data));
  }, []);

  return (
    <>
      <h1 className="fw-bold mb-4">Lab News</h1>

      {news.map((n) => (
        <div className="card shadow-sm mb-3" key={n._id}>
          <div className="card-body">
            <h4>{n.title}</h4>
            <p className="text-muted">{new Date(n.date).toLocaleDateString()}</p>
            <p>{n.content}</p>

            {n.link && (
              <a href={n.link} target="_blank" rel="noreferrer">
                View Source →
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
