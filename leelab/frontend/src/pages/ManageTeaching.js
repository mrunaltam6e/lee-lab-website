import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManageTeaching() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({
    courseTitle: "",
    courseCode: "",
    schedule: "",
    semester: "",
  });

  const load = async () => {
    try {
      const res = await API.get("/teaching");
      setList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/teaching", form);
      setForm({ courseTitle: "", courseCode: "", schedule: "", semester: "" });
      load();
      alert("Teaching schedule added!");
    } catch (err) {
      console.error(err);
      alert("Error: " + err.response?.data?.message);
    }
  };

  const deleteItem = async (id) => {
    if (!window.confirm("Delete this entry?")) return;
    try {
      await API.delete(`/teaching/${id}`);
      load();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Teaching</h2>

      <form className="card p-3" onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Course Title</label>
          <input
            className="form-control"
            value={form.courseTitle}
            onChange={(e) => setForm({ ...form, courseTitle: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Course Code</label>
          <input
            className="form-control"
            value={form.courseCode}
            onChange={(e) => setForm({ ...form, courseCode: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Schedule</label>
          <input
            className="form-control"
            value={form.schedule}
            onChange={(e) => setForm({ ...form, schedule: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Semester</label>
          <input
            className="form-control"
            value={form.semester}
            onChange={(e) => setForm({ ...form, semester: e.target.value })}
            required
          />
        </div>

        <button className="btn btn-primary">Add</button>
      </form>

      <hr />

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Course Code</th>
            <th>Schedule</th>
            <th>Semester</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((t) => (
            <tr key={t._id}>
              <td>{t.courseTitle}</td>
              <td>{t.courseCode}</td>
              <td>{t.schedule}</td>
              <td>{t.semester}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteItem(t._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
