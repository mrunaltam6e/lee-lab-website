import { useEffect, useState } from "react";
import API from "../services/api";

export default function Publications() {
  const [pubs, setPubs] = useState([]);

  useEffect(() => {
    API.get("/publications").then((res) => setPubs(res.data));
  }, []);

  return (
    <>
      <h1 className="fw-bold mb-4">Publications</h1>

      <ul className="list-group">
        {pubs.map((p) => (
          <li className="list-group-item py-3" key={p._id}>
            <h5>{p.title}</h5>
            {p.authors && <p className="text-muted">{p.authors}</p>}
            {p.journal && <p><strong>Journal:</strong> {p.journal}</p>}
            <p>{p.abstract}</p>

            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer">
                Read Paper →
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
