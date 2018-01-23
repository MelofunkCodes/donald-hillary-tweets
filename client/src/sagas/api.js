const API_ROOT = process.env.API_ROOT || 'http://localhost:5000';
const tweetsUrl = username => `${API_ROOT}/getTweets/${encodeURI(username)}`;

const fetchTweets = async (username) => {
  const response = await fetch(tweetsUrl(username));
  return response.json();
};

export default fetchTweets;
