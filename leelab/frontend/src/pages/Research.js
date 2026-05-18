import { useEffect, useState } from "react";
import API from "../services/api";

export default function Research() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    API.get("/research").then((res) => setTopics(res.data));
  }, []);

  return (
    <>
      <h1 className="fw-bold mb-4">Research Areas</h1>

      <div className="row">
        {topics.map((t) => (
          <div className="col-md-6 mb-4" key={t._id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>{t.title}</h4>
                <p className="text-muted">{t.description}</p>

                {t.image && (
                  <img
                    src={t.image}
                    className="img-fluid rounded mt-3"
                    alt={t.title}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
