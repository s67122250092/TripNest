const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const FIREBASE_DATABASE_URL =
  'https://tripnest-f76c9-default-rtdb.asia-southeast1.firebasedatabase.app';

let hotelCache = null;
let hotelCacheTime = 0;

async function getHotels() {
  // เก็บข้อมูลไว้ 30 วินาที เพื่อลดการอ่านฐานข้อมูลซ้ำระหว่างค้นหา
  if (hotelCache && Date.now() - hotelCacheTime < 30_000) {
    return hotelCache;
  }

  const response = await fetch(`${FIREBASE_DATABASE_URL}/hotels.json`);

  if (!response.ok) {
    throw new Error(`Firebase returned ${response.status}`);
  }

  const data = await response.json();

  hotelCache = Object.entries(data || {})
    .filter(([, hotel]) => hotel && typeof hotel === 'object')
    .map(([key, hotel]) => ({
      ...hotel,
      id: hotel.id ?? Number(key),
      tags: Array.isArray(hotel.tags)
        ? hotel.tags
        : Object.values(hotel.tags || {}),
    }));

  hotelCacheTime = Date.now();
  return hotelCache;
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hotels', async (req, res) => {
  try {
    let result = await getHotels();

    const q = String(req.query.q || '').toLowerCase();
    const type = String(req.query.type || 'ทั้งหมด');
    const max = Number(req.query.max || 0);
    const sort = String(req.query.sort || 'recommended');

    if (q) {
      result = result.filter((hotel) => {
        const searchable = [
          hotel.name,
          hotel.area,
          hotel.distance,
          hotel.tags.join(' '),
          hotel.code,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return searchable.includes(q);
      });
    }

    if (type !== 'ทั้งหมด') {
      result = result.filter((hotel) => hotel.type === type);
    }

    if (max > 0) {
      result = result.filter((hotel) => hotel.price <= max);
    }

    if (sort === 'priceLow') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'priceHigh') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    res.json(result);
  } catch (error) {
    console.error('Failed to load hotels from Firebase:', error);
    res.status(502).json({
      message: 'อ่านข้อมูลที่พักจาก Firebase ไม่สำเร็จ',
    });
  }
});

app.get('/api/hotels/:id', async (req, res) => {
  try {
    const hotels = await getHotels();
    const hotel = hotels.find(
      (item) => Number(item.id) === Number(req.params.id)
    );

    if (!hotel) {
      return res.status(404).json({ message: 'ไม่พบที่พัก' });
    }

    res.json(hotel);
  } catch (error) {
    console.error('Failed to load hotel from Firebase:', error);
    res.status(502).json({
      message: 'อ่านข้อมูลที่พักจาก Firebase ไม่สำเร็จ',
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`TripNest running on port ${PORT}`);
});