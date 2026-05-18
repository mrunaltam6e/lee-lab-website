import axios from "axios";

export const fetchTweetsForUser = async (username, maxResults = 5) => {
  const token = process.env.TWITTER_BEARER_TOKEN;

  const userRes = await axios.get(
    `https://api.twitter.com/2/users/by/username/${username}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const userId = userRes.data.data.id;

  const tweets = await axios.get(
    `https://api.twitter.com/2/users/${userId}/tweets`,
    {
      params: { max_results: maxResults },
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return tweets.data.data;
};
