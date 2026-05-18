import News from "../models/news.model.js";
import axios from "axios";

// ✅ AUTO IMPORT FROM TWITTER
export const importFromTwitter = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.twitter.com/2/users/by/username/YOUR_USERNAME",
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );

    const tweet = response.data.data;

    const saved = await News.create({
      title: tweet.text.slice(0, 80),
      description: tweet.text,
      source: "twitter",
      image: req.body.image || "",
    });

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Twitter fetch failed" });
  }
};

// ✅ ADMIN MANUAL POST
export const addNews = async (req, res) => {
  const { title, description, image } = req.body;

  const news = await News.create({
    title,
    description,
    image,
    source: "manual",
  });

  res.status(201).json(news);
};

// ✅ UPDATE NEWS (API OR MANUAL)
export const updateNews = async (req, res) => {
  const updated = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

// ✅ DELETE NEWS
export const deleteNews = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: "News deleted" });
};

// ✅ GET ALL
export const getNews = async (_req, res) => {
  const list = await News.find().sort({ createdAt: -1 });
  res.json(list);
};
