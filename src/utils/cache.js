// src/utils/cache.js

export const setCache = (key, data, ttl = 3600000) => {
  const now = new Date().getTime();
  const item = {
    data: data,
    expiry: now + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getCache = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date().getTime();
  if (now > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.data;
};

export const clearCache = (key) => {
  localStorage.removeItem(key);
};