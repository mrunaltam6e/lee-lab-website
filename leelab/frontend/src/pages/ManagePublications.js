import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManagePublications() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", authors: "", journal: "", abstract: "", link: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => load(), []);

  const load = async () => {
    const res = await API.get("/publications");
    setItems(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();
    editId
      ? await API.put(`/publications/${editId}`, form)
      : await API.post("/publications", form);

    load();
    setForm({ title: "", authors: "", journal: "", abstract: "", link: "" });
    setEditId(null);
  };

  const del = async (id) => {
    if (!window.confirm("Delete publication?")) return;
    await API.delete(`/publications/${id}`);
    load();
  };

  const edit = (i) => {
    setEditId(i._id);
    setForm(i);
  };

  return (
    <>
      <h1 className="fw-bold mb-4">Manage Publications</h1>

      <form className="card shadow p-4 mb-4" onSubmit={submit}>
        <h4>{editId ? "Edit Publication" : "Add Publication"}</h4>

        {Object.keys(form).map((field) => (
          <div className="mb-3" key={field}>
            <label>{field.toUpperCase()}</label>
            <textarea className="form-control" value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            ></textarea>
          </div>
        ))}

        <button className="btn btn-primary">{editId ? "Update" : "Add"}</button>
      </form>

      <table className="table table-bordered shadow-sm">
        <thead>
          <tr>
            <th>Title</th><th>Authors</th><th>Journal</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((p) => (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>{p.authors}</td>
              <td>{p.journal}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => edit(p)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => del(p._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
