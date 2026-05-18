import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManageNews() {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [image, setImage] = useState("");

  const load = async () => {
    const res = await API.get("/news");
    setNews(res.data);
  };

  const submit = async () => {
    await API.post("/news", { title, description, image });
    setTitle("");
    setDesc("");
    setImage("");
    load();
  };

  const remove = async (id) => {
    await API.delete(`/news/${id}`);
    load();
  };

  const importTwitter = async () => {
    await API.post("/news/twitter/import", { image });
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container">
      <h2>Manage News</h2>

      <input value={title} onChange={e=>setTitle(e.target.value)} className="form-control mb-2" placeholder="Title" />
      <textarea value={description} onChange={e=>setDesc(e.target.value)} className="form-control mb-2" placeholder="Description" />
      <input value={image} onChange={e=>setImage(e.target.value)} className="form-control mb-2" placeholder="Image URL" />

      <button className="btn btn-primary" onClick={submit}>Add Manual News</button>
      <button className="btn btn-warning ms-2" onClick={importTwitter}>Import from Twitter</button>

      <hr />

      {news.map(n => (
        <div key={n._id} className="border p-2 mb-2">
          <h5>{n.title}</h5>
          <p>{n.description}</p>
          {n.image && <img src={n.image} width="150" />}
          <div>
            <small>{n.source}</small>
            <button className="btn btn-danger btn-sm ms-2" onClick={()=>remove(n._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
