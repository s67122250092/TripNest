const HOTEL_DETAILS = {
  1: {
    name: "Woodstory Boutique Hotel",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1200,
    rating: 9.0,
    type: "Boutique Hotel",
    description: "โรงแรมบูทีคในเขตห้วยขวาง พร้อมห้องพักและสิ่งอำนวยความสะดวก",
    images: [
      "/images/detail/bath/hotel_001_bathroom.webp",
      "/images/detail/bedroom/hotel_001_room.webp"
    ],
    highlights: ["โรงแรมบูทีค", "ห้วยขวาง"]
  },
  2: {
    name: "X9Hostel",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1100,
    rating: 9.0,
    type: "Hostel",
    description: "โฮสเทลมีห้องส่วนตัวและห้องพักรวม พร้อม Wi-Fi",
    images: [
      "/images/detail/bath/hotel_002_bathroom.webp",
      "/images/detail/bedroom/hotel_002_room.webp"
    ],
    highlights: ["โฮสเทล", "ห้องพักรวม", "ห้วยขวาง"]
  },
  3: {
    name: "Neveu Premier Residence Ratchada",
    area: "รัชดา กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 3500,
    rating: 9.0,
    type: "Apartment",
    description: "ที่พักแบบเรสซิเดนซ์ มีพื้นที่พักผ่อนและที่จอดรถ",
    images: [
      "/images/detail/bath/hotel_003_bathroom.webp",
      "/images/detail/bedroom/hotel_003_room.webp"
    ],
    highlights: ["เรสซิเดนซ์", "รัชดา", "ห้วยขวาง"]
  },
  4: {
    name: "Tiva Residence Bangkok",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1900,
    rating: 9.6,
    type: "Residence",
    description: "ที่พักสไตล์เรสซิเดนซ์ พร้อมระเบียงและที่จอดรถ",
    images: [
      "/images/detail/bath/hotel_004_bathroom.webp",
      "/images/detail/bedroom/hotel_004_room.webp"
    ],
    highlights: ["เรสซิเดนซ์", "ห้วยขวาง"]
  },
  5: {
    name: "Sweet Stay",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2000,
    rating: 9.0,
    type: "Apartment",
    description: "ที่พักขนาดกะทัดรัดในเขตห้วยขวาง",
    images: [
      "/images/detail/bath/hotel_005_bathroom.webp",
      "/images/detail/bedroom/hotel_005_room.webp"
    ],
    highlights: ["อพาร์ตเมนต์", "ห้วยขวาง"]
  },
  6: {
    name: "I-House Laguna Garden RCA",
    area: "รัชดา กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1200,
    rating: 9.7,
    type: "Condominium",
    description: "ที่พักคอนโดใกล้ RCA และย่านรัชดา",
    images: [
      "/images/detail/bath/hotel_006_bathroom.webp",
      "/images/detail/bedroom/hotel_006_room.webp"
    ],
    highlights: ["คอนโด", "RCA", "ห้วยขวาง"]
  },
  7: {
    name: "Siamese Residence Rama 9",
    area: "พระราม 9 กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 3300,
    rating: 9.1,
    type: "Residence",
    description: "ที่พักย่านพระราม 9 มีสระว่ายน้ำและพื้นที่ส่วนกลาง",
    images: [
      "/images/detail/bath/hotel_007_bathroom.webp",
      "/images/detail/bedroom/hotel_007_room.webp"
    ],
    highlights: ["พระราม 9", "สระว่ายน้ำ", "ห้วยขวาง"]
  },
  8: {
    name: "Ranana Bangkok",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1200,
    rating: 9.0,
    type: "Hotel",
    description: "โรงแรมในเขตห้วยขวาง เหมาะสำหรับพักระยะสั้น",
    images: [
      "/images/detail/bath/hotel_008_bathroom.webp",
      "/images/detail/bedroom/hotel_008_room.webp"
    ],
    highlights: ["โรงแรม", "ห้วยขวาง"]
  },
  9: {
    name: "Artisan Ratchada Condo",
    area: "รัชดา กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2400,
    rating: 9.1,
    type: "Condominium",
    description: "คอนโดพร้อมสระว่ายน้ำ ซาวน่า และอ่างน้ำร้อน",
    images: [
      "/images/detail/bath/hotel_009_bathroom.webp",
      "/images/detail/bedroom/hotel_009_room.webp"
    ],
    highlights: ["คอนโด", "รัชดา", "สระว่ายน้ำ"]
  },
  10: {
    name: "Homies Ratchada Hotel",
    area: "รัชดา กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2200,
    rating: 9.1,
    type: "Hotel",
    description: "โรงแรมพร้อมห้องปรับอากาศและ Wi-Fi",
    images: [
      "/images/detail/bath/hotel_010_bathroom.webp",
      "/images/detail/bedroom/hotel_010_room.webp"
    ],
    highlights: ["โรงแรม", "รัชดา", "Wi-Fi"]
  },
  11: {
    name: "Holiday Inn Express Bangkok Soi Soonvijai",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2500,
    rating: 8.3,
    type: "Hotel",
    description: "โรงแรมใกล้โรงพยาบาลกรุงเทพ พร้อมอาหารเช้า",
    images: [
      "/images/detail/bath/hotel_011_bathroom.webp",
      "/images/detail/bedroom/hotel_011_room.webp"
    ],
    highlights: ["ใกล้โรงพยาบาลกรุงเทพ", "อาหารเช้า"]
  },
  12: {
    name: "Grand Mercure Bangkok Atrium",
    area: "รัชดา กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2800,
    rating: 8.0,
    type: "Hotel",
    description: "โรงแรมพร้อมสระว่ายน้ำและห้องอาหาร",
    images: [
      "/images/detail/bath/hotel_012_bathroom.webp",
      "/images/detail/bedroom/hotel_012_room.webp"
    ],
    highlights: ["โรงแรม", "สระว่ายน้ำ", "รัชดา"]
  },
  13: {
    name: "Somerset Rama 9 Bangkok",
    area: "พระราม 9 กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 3100,
    rating: 8.6,
    type: "Apartment",
    description: "เซอร์วิสอพาร์ตเมนต์พร้อมสระว่ายน้ำและฟิตเนส",
    images: [
      "/images/detail/bath/hotel_013_bathroom.webp",
      "/images/detail/bedroom/hotel_013_room.webp"
    ],
    highlights: ["เซอร์วิสอพาร์ตเมนต์", "พระราม 9"]
  },
  14: {
    name: "Kokotel Bangkok Dheva Thonglor",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1800,
    rating: 8.3,
    type: "Hotel",
    description: "โรงแรมสำหรับนักเดินทางและครอบครัว พร้อมห้องอาหาร",
    images: [
      "/images/detail/bath/hotel_014_bathroom.webp",
      "/images/detail/bedroom/hotel_014_room.webp"
    ],
    highlights: ["โรงแรม", "ครอบครัว", "อาหารเช้า"]
  },
  15: {
    name: "Lancaster Bangkok",
    area: "มักกะสัน กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 3600,
    rating: 8.9,
    type: "Hotel",
    description: "โรงแรมระดับพรีเมียมพร้อมห้องพักกว้างและสิ่งอำนวยความสะดวก",
    images: [
      "/images/detail/bath/hotel_015_bathroom.webp",
      "/images/detail/bedroom/hotel_015_room.webp"
    ],
    highlights: ["โรงแรม", "พรีเมียม", "มักกะสัน"]
  },
  16: {
    name: "Cassia Rama 9 Bangkok",
    area: "พระราม 9 กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2800,
    rating: 8.4,
    type: "Apartment",
    description: "ที่พักย่านพระราม 9 พร้อมสระว่ายน้ำและวิวเมือง",
    images: [
      "/images/detail/bath/hotel_016_bathroom.webp",
      "/images/detail/bedroom/hotel_016_room.webp"
    ],
    highlights: ["พระราม 9", "สระว่ายน้ำ", "วิวเมือง"]
  },
  17: {
    name: "Maitria Hotel Rama 9 Bangkok",
    area: "พระราม 9 กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2600,
    rating: 8.7,
    type: "Hotel",
    description: "โรงแรมย่านพระราม 9 พร้อมห้องพักและอาหารเช้า",
    images: [
      "/images/detail/bath/hotel_017_bathroom.webp",
      "/images/detail/bedroom/hotel_017_room.webp"
    ],
    highlights: ["โรงแรม", "พระราม 9", "อาหารเช้า"]
  },
  18: {
    name: "Graph Hotels Bangkok",
    area: "รัชดา กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2100,
    rating: 8.4,
    type: "Hotel",
    description: "โรงแรมใจกลางเมือง เดินทางสะดวกสู่ย่านธุรกิจ",
    images: [
      "/images/detail/bath/hotel_018_bathroom.webp",
      "/images/detail/bedroom/hotel_018_room.webp"
    ],
    highlights: ["โรงแรม", "ย่านธุรกิจ", "รัชดา"]
  },
  19: {
    name: "S Ratchada Leisure Hotel",
    area: "รัชดา กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1700,
    rating: 8.0,
    type: "Hotel",
    description: "โรงแรมพร้อมสระว่ายน้ำและอาหารเช้า",
    images: [
      "/images/detail/bath/hotel_019_bathroom.webp",
      "/images/detail/bedroom/hotel_019_room.webp"
    ],
    highlights: ["โรงแรม", "รัชดา", "สระว่ายน้ำ"]
  },
  20: {
    name: "ibis Styles Bangkok Ratchada",
    area: "รัชดา กรุงเทพฯ",
    distance: "ใกล้ MRT",
    price: 1600,
    rating: 8.2,
    type: "Hotel",
    description: "โรงแรมสไตล์โมเดิร์นใกล้รถไฟฟ้า MRT",
    images: [
      "/images/detail/bath/hotel_020_bathroom.webp",
      "/images/detail/bedroom/hotel_020_room.webp"
    ],
    highlights: ["ใกล้ MRT", "โรงแรม", "รัชดา"]
  },
  21: {
    name: "Amaranta Hotel",
    area: "รัชดา กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2200,
    rating: 8.2,
    type: "Hotel",
    description: "โรงแรมพร้อมสระว่ายน้ำบนดาดฟ้าและห้องอาหาร",
    images: [
      "/images/detail/bath/hotel_021_bathroom.webp",
      "/images/detail/bedroom/hotel_021_room.webp"
    ],
    highlights: ["โรงแรม", "ดาดฟ้า", "รัชดา"]
  },
  22: {
    name: "MeStyle Garage Hotel",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1500,
    rating: 8.6,
    type: "Hotel",
    description: "โรงแรมขนาดกะทัดรัดพร้อม Wi-Fi และที่จอดรถ",
    images: [
      "/images/detail/bath/hotel_022_bathroom.webp",
      "/images/detail/bedroom/hotel_022_room.webp"
    ],
    highlights: ["โรงแรม", "Wi-Fi", "ห้วยขวาง"]
  },
  23: {
    name: "CMYK Boutique Hotel",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ใกล้ MRT ห้วยขวาง",
    price: 1800,
    rating: 8.3,
    type: "Boutique Hotel",
    description: "โรงแรมบูทีคใกล้ MRT ห้วยขวาง",
    images: [
      "/images/detail/bath/hotel_023_bathroom.webp",
      "/images/detail/bedroom/hotel_023_room.webp"
    ],
    highlights: ["ใกล้ MRT ห้วยขวาง", "โรงแรมบูทีค"]
  },
  24: {
    name: "Nest by Sangob",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1000,
    rating: 8.1,
    type: "Hotel",
    description: "โรงแรมพร้อมสระว่ายน้ำและห้องพักกว้าง",
    images: [
      "/images/detail/bath/hotel_024_bathroom.webp",
      "/images/detail/bedroom/hotel_024_room.webp"
    ],
    highlights: ["โรงแรม", "สระว่ายน้ำ", "ห้วยขวาง"]
  },
  25: {
    name: "Happihaus Hotel Bangkok",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1500,
    rating: 8.2,
    type: "Hotel",
    description: "โรงแรมเงียบสงบใกล้โรงพยาบาลและสิ่งอำนวยความสะดวก",
    images: [
      "/images/detail/bath/hotel_025_bathroom.webp",
      "/images/detail/bedroom/hotel_025_room.webp"
    ],
    highlights: ["โรงแรม", "ใกล้โรงพยาบาล"]
  },
  26: {
    name: "Praso@Ratchada12",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ใกล้ MRT ห้วยขวาง",
    price: 1400,
    rating: 8.0,
    type: "Hotel",
    description: "โรงแรมใกล้ MRT ห้วยขวาง พร้อมสระว่ายน้ำบนดาดฟ้า",
    images: [
      "/images/detail/bath/hotel_026_bathroom.webp",
      "/images/detail/bedroom/hotel_026_room.webp"
    ],
    highlights: ["ใกล้ MRT ห้วยขวาง", "สระว่ายน้ำ"]
  },
  27: {
    name: "Atrium Boutique Hotel",
    area: "รัชดา กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 1400,
    rating: 8.0,
    type: "Boutique Hotel",
    description: "โรงแรมย่านรัชดาพร้อมสระว่ายน้ำ",
    images: [
      "/images/detail/bath/hotel_027_bathroom.webp",
      "/images/detail/bedroom/hotel_027_room.webp"
    ],
    highlights: ["โรงแรมบูทีค", "รัชดา", "สระว่ายน้ำ"]
  },
  28: {
    name: "Amp Am House Bangkok Hotel",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2000,
    rating: 8.6,
    type: "Hotel",
    description: "โรงแรมในย่านเงียบสงบ พร้อม Wi-Fi และที่จอดรถ",
    images: [
      "/images/detail/bath/hotel_028_bathroom.webp",
      "/images/detail/bedroom/hotel_028_room.webp"
    ],
    highlights: ["โรงแรม", "Wi-Fi", "ที่จอดรถ"]
  },
  29: {
    name: "Double Bed Hotel",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 900,
    rating: 8.8,
    type: "Hotel",
    description: "โรงแรม 3 ดาว พร้อมพื้นที่ส่วนกลาง ระเบียง และห้องอาหาร",
    images: [
      "/images/detail/bath/hotel_029_bathroom.webp",
      "/images/detail/bedroom/hotel_029_room.webp"
    ],
    highlights: ["โรงแรม", "ห้องอาหาร", "ห้วยขวาง"]
  },
  30: {
    name: "MeStyle Place Hotel",
    area: "ห้วยขวาง กรุงเทพฯ",
    distance: "ย่านห้วยขวาง",
    price: 2200,
    rating: 8.2,
    type: "Hotel",
    description: "โรงแรมพร้อมสระว่ายน้ำ สวน และที่จอดรถ",
    images: [
      "/images/detail/bath/hotel_030_bathroom.webp",
      "/images/detail/bedroom/hotel_030_room.webp"
    ],
    highlights: ["โรงแรม", "สระว่ายน้ำ", "ห้วยขวาง"]
  }
};

let currentHotel = null;
let currentImage = 0;
let currentHotelData = null;

async function loadHotels() {
  const q = document.getElementById('q').value;
  const type = document.getElementById('type').value;
  const sort = document.getElementById('sort').value;
  const max = window.maxPrice || 0;

  try {
    const response = await fetch(
      `/api/hotels?q=${encodeURIComponent(q)}&type=${encodeURIComponent(type)}&sort=${encodeURIComponent(sort)}&max=${encodeURIComponent(max)}`
    );

    if (!response.ok) {
      throw new Error(`โหลดรายการที่พักไม่สำเร็จ (${response.status})`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error(data.message || 'รูปแบบข้อมูลที่พักไม่ถูกต้อง');
    }

    document.getElementById('cards').innerHTML = data.length
      ? data.map((hotel) => `
        <article class="card">
          <img src="${hotel.image}" alt="${hotel.name}">
          <div class="card-body">
            <div class="card-topline">
              <span class="tag">${hotel.type}</span>
              <span class="rating">★ ${hotel.rating}</span>
            </div>
            <h3>${hotel.name}</h3>
            <div class="meta">📍 ${hotel.area} · ${hotel.distance}</div>
            <div class="tags">
              ${(hotel.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="price">
              <strong>฿${Number(hotel.price).toLocaleString()} <small>/ คืน</small></strong>
              <button class="login detail-link" type="button" onclick="openDetail(${hotel.id})">
                ดูรายละเอียด
              </button>
            </div>
          </div>
        </article>
      `).join('')
      : '<p>ไม่พบที่พักที่ตรงกับเงื่อนไข</p>';
  } catch (error) {
    console.error(error);
    document.getElementById('cards').innerHTML =
      '<p>โหลดรายการที่พักไม่สำเร็จ กรุณาลองใหม่อีกครั้ง</p>';
  }
}

async function openDetail(id) {
  const fallback = HOTEL_DETAILS[id] || {};
  let firebaseHotel = {};

  try {
    const response = await fetch(`/api/hotels/${encodeURIComponent(id)}`);

    if (!response.ok) {
      throw new Error(`โหลดรายละเอียดไม่สำเร็จ (${response.status})`);
    }

    firebaseHotel = await response.json();
  } catch (error) {
    console.error('อ่านรายละเอียดจาก Firebase ไม่สำเร็จ:', error);
  }

  const hotel = { ...fallback, ...firebaseHotel };

  hotel.images = hotel.images?.length
    ? hotel.images
    : hotel.image
      ? [hotel.image]
      : [];

  hotel.highlights = hotel.highlights?.length
    ? hotel.highlights
    : hotel.tags || [];

  if (!hotel.name) return;

  currentHotel = id;
  currentHotelData = hotel;
  currentImage = 0;

  let modal = document.getElementById('detailModal');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'detailModal';
    modal.className = 'detail-modal';
    modal.innerHTML = `<div class="detail-panel" role="dialog" aria-modal="true">
      <button class="detail-close" onclick="closeDetail()" aria-label="ปิด">×</button>
      <div class="gallery">
        <button class="gallery-arrow left" onclick="changeDetailImage(-1)">‹</button>
        <img id="detailMainImage" alt="">
        <button class="gallery-arrow right" onclick="changeDetailImage(1)">›</button>
        <div class="gallery-counter" id="galleryCounter"></div>
      </div>
      <div class="gallery-thumbs" id="detailThumbs"></div>
      <div class="detail-info">
        <div>
          <span class="tag" id="detailType"></span>
          <span class="rating" id="detailRating"></span>
          <h2 id="detailName"></h2>
          <p id="detailMeta"></p>
        </div>
        <div class="detail-price" id="detailPrice"></div>
      </div>
      <div class="detail-description" id="detailDescription"></div>
      <div class="detail-highlights" id="detailHighlights"></div>
    </div>`;

    document.body.appendChild(modal);

    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeDetail();
    });
  }

  document.getElementById('detailType').textContent = hotel.type || '';
  document.getElementById('detailRating').textContent = `★ ${hotel.rating ?? ''}`;
  document.getElementById('detailName').textContent = hotel.name;
  document.getElementById('detailMeta').textContent =
    `📍 ${hotel.area || ''} · ${hotel.distance || ''}`;
  document.getElementById('detailPrice').innerHTML =
    `฿${Number(hotel.price || 0).toLocaleString()} <small>/ คืน</small>`;
  document.getElementById('detailDescription').textContent =
    hotel.description || '';

  document.getElementById('detailHighlights').innerHTML =
    hotel.highlights.map((item) => `<span>${item}</span>`).join('');

  renderDetailImage();
  modal.classList.add('show');
  document.body.classList.add('modal-open');
}

function renderDetailImage() {
  const hotel = currentHotelData;
  if (!hotel) return;

  const images = hotel.images || [];
  if (!images.length) return;

  document.getElementById('detailMainImage').src = images[currentImage];
  document.getElementById('detailMainImage').alt = hotel.name;
  document.getElementById('galleryCounter').textContent =
    `${currentImage + 1} / ${images.length}`;

  document.getElementById('detailThumbs').innerHTML = images
    .map((src, index) => `
      <button class="thumb ${index === currentImage ? 'active' : ''}"
        type="button"
        onclick="setDetailImage(${index})">
        <img src="${src}" alt="รูปที่ ${index + 1}">
      </button>
    `)
    .join('');
}

function setDetailImage(index) {
  const images = currentHotelData?.images || [];
  if (!images.length) return;

  currentImage = index;
  renderDetailImage();
}

function changeDetailImage(step) {
  const images = currentHotelData?.images || [];
  if (!images.length) return;

  currentImage = (currentImage + step + images.length) % images.length;
  renderDetailImage();
}

function closeDetail() {
  const modal = document.getElementById('detailModal');
  if (modal) modal.classList.remove('show');
  document.body.classList.remove('modal-open');
}

function setMax(value) {
  window.maxPrice = value;
  loadHotels();
}

document.addEventListener('keydown', (event) => {
  const modal = document.getElementById('detailModal');

  if (!modal || !modal.classList.contains('show')) return;

  if (event.key === 'Escape') closeDetail();
  if (event.key === 'ArrowRight') changeDetailImage(1);
  if (event.key === 'ArrowLeft') changeDetailImage(-1);
});

document.addEventListener('DOMContentLoaded', loadHotels);