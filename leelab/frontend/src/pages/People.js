import { useEffect, useState } from "react";
import API from "../services/api";

export default function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    API.get("/people").then((res) => setPeople(res.data));
  }, []);

  return (
    <>
      <h1 className="fw-bold mb-4">Our Lab Members</h1>

      <div className="row">
        {people.map((p) => (
          <div className="col-md-4 mb-4" key={p._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4>{p.name}</h4>
                <p className="text-muted">{p.role}</p>
                <p>{p.bio}</p>

                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="img-fluid rounded mt-3"
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
