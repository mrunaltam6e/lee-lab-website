import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManageResearch() {
  const [topics, setTopics] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => load(), []);

  const load = async () => {
    const res = await API.get("/research");
    setTopics(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();
    editId
      ? await API.put(`/research/${editId}`, form)
      : await API.post("/research", form);
    load();
    setEditId(null);
    setForm({ title: "", description: "", image: "" });
  };

  const del = async (id) => {
    if (!window.confirm("Delete this topic?")) return;
    await API.delete(`/research/${id}`);
    load();
  };

  const edit = (r) => {
    setEditId(r._id);
    setForm(r);
  };

  return (
    <>
      <h1 className="fw-bold mb-4">Manage Research</h1>

      <form className="card shadow p-4 mb-4" onSubmit={submit}>
        <h4>{editId ? "Edit Topic" : "Add Topic"}</h4>

        {["title", "description", "image"].map((f) => (
          <div className="mb-3" key={f}>
            <label>{f.toUpperCase()}</label>
            <textarea className="form-control" value={form[f]}
              onChange={(e) => setForm({ ...form, [f]: e.target.value })}
            ></textarea>
          </div>
        ))}

        <button className="btn btn-primary">{editId ? "Update" : "Add"}</button>
      </form>

      <table className="table table-bordered shadow-sm">
        <thead>
          <tr>
            <th>Title</th><th>Description</th><th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {topics.map((t) => (
            <tr key={t._id}>
              <td>{t.title}</td>
              <td>{t.description}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => edit(t)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => del(t._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
