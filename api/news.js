const cache = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export default async function handler(req, res) {
  const { category = 'general', pageSize = 9, page = 1 } = req.query;
  const NEWS_API_KEY = process.env.NEWS_API_KEY;
  const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

  if (!NEWS_API_KEY) {
    return res.status(500).json({ error: 'News API key is not configured.' });
  }

  const cacheKey = `${category}-${pageSize}-${page}`;
  const cachedData = cache[cacheKey];

  if (cachedData && (Date.now() - cachedData.timestamp < CACHE_DURATION)) {
    return res.status(200).json(cachedData.data);
  }

  try {
    const response = await fetch(
      `${NEWS_API_URL}?country=in&category=${category}&apiKey=${NEWS_API_KEY}&pageSize=${pageSize}&page=${page}`
    );
    const data = await response.json();

    if (response.ok) {
      cache[cacheKey] = {
        data: data,
        timestamp: Date.now(),
      };
      res.status(200).json(data);
    } else {
      // Forward the error from NewsAPI
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'A server error occurred while fetching news.' });
  }
}
