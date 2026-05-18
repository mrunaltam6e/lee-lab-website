import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManagePeople() {
  const [people, setPeople] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", bio: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    const res = await API.get("/people");
    setPeople(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();

    if (editId) {
      await API.put(`/people/${editId}`, form);
    } else {
      await API.post("/people", form);
    }

    loadPeople();
    setForm({ name: "", role: "", bio: "" });
    setEditId(null);
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this person?")) return;
    await API.delete(`/people/${id}`);
    loadPeople();
  };

  const edit = (p) => {
    setEditId(p._id);
    setForm({
      name: p.name,
      role: p.role,
      bio: p.bio,
    });
  };

  return (
    <>
      <h1 className="fw-bold mb-4">Manage People</h1>

      {/* FORM */}
      <form className="card shadow-sm p-4 mb-4" onSubmit={submit}>
        <h4>{editId ? "Edit Person" : "Add Person"}</h4>

        <div className="mb-3">
          <label>Name</label>
          <input className="form-control"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <input className="form-control"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            required />
        </div>

        <div className="mb-3">
          <label>Bio</label>
          <textarea
            className="form-control"
            rows={3}
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
          />
        </div>

        <button className="btn btn-primary">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      {/* TABLE */}
      <table className="table table-bordered shadow-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Bio</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {people.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.role}</td>
              <td>{p.bio}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => edit(p)}>
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => remove(p._id)}
                >
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
