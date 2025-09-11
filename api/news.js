import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { country, category, page, pageSize } = req.query;

  const params = new URLSearchParams({
    country: country || 'us',
    category: category || 'general',
    apiKey: process.env.VITE_REACT_APP_NEWS_API,
    page: page || 1,
    pageSize: pageSize || 8,
  });

  const url = `https://newsapi.org/v2/top-headlines?${params.toString()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error in serverless function:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}