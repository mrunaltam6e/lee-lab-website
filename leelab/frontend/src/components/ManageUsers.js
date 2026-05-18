import { useEffect, useState } from "react";
import api from "../services/api";


export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "lab",
  });

  const [loading, setLoading] = useState(false);

  // Load all users
  const fetchUsers = async () => {
    const res = await api.get("/auth/all");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/register", form);
      alert("User added successfully");
      setForm({ name: "", email: "", password: "", role: "lab" });
      fetchUsers();
    } catch (err) {
      alert("Error adding user");
    }

    setLoading(false);
  };

  // Delete user
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    await api.delete(`/auth/${id}`);
    fetchUsers();
  };

  // Update role
  const updateRole = async (id, role) => {
    await api.put(`/auth/update-role/${id}`, { role });
    fetchUsers();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Manage Users</h2>

      {/* Add New User */}
      <div className="card p-3 mb-4">
        <h5>Add New User</h5>
        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-2"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            className="form-control mb-2"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            className="form-control mb-2"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <select
            className="form-control mb-3"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="lab">Lab Member</option>
            <option value="admin">Admin</option>
          </select>

          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Adding..." : "Add User"}
          </button>
        </form>
      </div>

      {/* Users List */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th width="200">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <select
                  className="form-select"
                  value={u.role}
                  onChange={(e) => updateRole(u._id, e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="lab">Lab Member</option>
                  <option value="public">Public</option>
                </select>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(u._id)}
                >
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
