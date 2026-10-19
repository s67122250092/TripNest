import { useEffect, useMemo, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from './firebase';
import './TripNest.css';

const HOTEL_DETAILS = {
  1: {
    description: 'โรงแรมบูทีคในเขตห้วยขวาง พร้อมห้องพักและสิ่งอำนวยความสะดวก',
    highlights: ['โรงแรมบูทีค', 'ห้วยขวาง'],
  },
  2: {
    description: 'โฮสเทลมีห้องส่วนตัวและห้องพักรวม พร้อม Wi-Fi',
    highlights: ['โฮสเทล', 'ห้องพักรวม', 'ห้วยขวาง'],
  },
  3: {
    description: 'ที่พักแบบเรสซิเดนซ์ มีพื้นที่พักผ่อนและที่จอดรถ',
    highlights: ['เรสซิเดนซ์', 'รัชดา', 'ห้วยขวาง'],
  },
  4: {
    description: 'ที่พักสไตล์เรสซิเดนซ์ พร้อมระเบียงและที่จอดรถ',
    highlights: ['เรสซิเดนซ์', 'ห้วยขวาง'],
  },
  5: {
    description: 'ที่พักขนาดกะทัดรัดในเขตห้วยขวาง',
    highlights: ['อพาร์ตเมนต์', 'ห้วยขวาง'],
  },
  6: {
    description: 'ที่พักคอนโดใกล้ RCA และย่านรัชดา',
    highlights: ['คอนโด', 'RCA', 'ห้วยขวาง'],
  },
  7: {
    description: 'ที่พักย่านพระราม 9 มีสระว่ายน้ำและพื้นที่ส่วนกลาง',
    highlights: ['พระราม 9', 'สระว่ายน้ำ', 'ห้วยขวาง'],
  },
  8: {
    description: 'โรงแรมในเขตห้วยขวาง เหมาะสำหรับพักระยะสั้น',
    highlights: ['โรงแรม', 'ห้วยขวาง'],
  },
  9: {
    description: 'คอนโดพร้อมสระว่ายน้ำ ซาวน่า และอ่างน้ำร้อน',
    highlights: ['คอนโด', 'รัชดา', 'สระว่ายน้ำ'],
  },
  10: {
    description: 'โรงแรมพร้อมห้องปรับอากาศและ Wi-Fi',
    highlights: ['โรงแรม', 'รัชดา', 'Wi-Fi'],
  },
  11: {
    description: 'โรงแรมใกล้โรงพยาบาลกรุงเทพ พร้อมอาหารเช้า',
    highlights: ['ใกล้โรงพยาบาลกรุงเทพ', 'อาหารเช้า'],
  },
  12: {
    description: 'โรงแรมพร้อมสระว่ายน้ำและห้องอาหาร',
    highlights: ['โรงแรม', 'สระว่ายน้ำ', 'รัชดา'],
  },
  13: {
    description: 'เซอร์วิสอพาร์ตเมนต์พร้อมสระว่ายน้ำและฟิตเนส',
    highlights: ['เซอร์วิสอพาร์ตเมนต์', 'พระราม 9'],
  },
  14: {
    description: 'โรงแรมสำหรับนักเดินทางและครอบครัว พร้อมห้องอาหาร',
    highlights: ['โรงแรม', 'ครอบครัว', 'อาหารเช้า'],
  },
  15: {
    description: 'โรงแรมระดับพรีเมียมพร้อมห้องพักกว้างและสิ่งอำนวยความสะดวก',
    highlights: ['โรงแรม', 'พรีเมียม', 'มักกะสัน'],
  },
  16: {
    description: 'ที่พักย่านพระราม 9 พร้อมสระว่ายน้ำและวิวเมือง',
    highlights: ['พระราม 9', 'สระว่ายน้ำ', 'วิวเมือง'],
  },
  17: {
    description: 'โรงแรมย่านพระราม 9 พร้อมห้องพักและอาหารเช้า',
    highlights: ['โรงแรม', 'พระราม 9', 'อาหารเช้า'],
  },
  18: {
    description: 'โรงแรมใจกลางเมือง เดินทางสะดวกสู่ย่านธุรกิจ',
    highlights: ['โรงแรม', 'ย่านธุรกิจ', 'รัชดา'],
  },
  19: {
    description: 'โรงแรมพร้อมสระว่ายน้ำและอาหารเช้า',
    highlights: ['โรงแรม', 'รัชดา', 'สระว่ายน้ำ'],
  },
  20: {
    description: 'โรงแรมสไตล์โมเดิร์นใกล้รถไฟฟ้า MRT',
    highlights: ['ใกล้ MRT', 'โรงแรม', 'รัชดา'],
  },
  21: {
    description: 'โรงแรมพร้อมสระว่ายน้ำบนดาดฟ้าและห้องอาหาร',
    highlights: ['โรงแรม', 'ดาดฟ้า', 'รัชดา'],
  },
  22: {
    description: 'โรงแรมขนาดกะทัดรัดพร้อม Wi-Fi และที่จอดรถ',
    highlights: ['โรงแรม', 'Wi-Fi', 'ห้วยขวาง'],
  },
  23: {
    description: 'โรงแรมบูทีคใกล้ MRT ห้วยขวาง',
    highlights: ['ใกล้ MRT ห้วยขวาง', 'โรงแรมบูทีค'],
  },
  24: {
    description: 'โรงแรมพร้อมสระว่ายน้ำและห้องพักกว้าง',
    highlights: ['โรงแรม', 'สระว่ายน้ำ', 'ห้วยขวาง'],
  },
  25: {
    description: 'โรงแรมเงียบสงบใกล้โรงพยาบาลและสิ่งอำนวยความสะดวก',
    highlights: ['โรงแรม', 'ใกล้โรงพยาบาล'],
  },
  26: {
    description: 'โรงแรมใกล้ MRT ห้วยขวาง พร้อมสระว่ายน้ำบนดาดฟ้า',
    highlights: ['ใกล้ MRT ห้วยขวาง', 'สระว่ายน้ำ'],
  },
  27: {
    description: 'โรงแรมย่านรัชดาพร้อมสระว่ายน้ำ',
    highlights: ['โรงแรมบูทีค', 'รัชดา', 'สระว่ายน้ำ'],
  },
  28: {
    description: 'โรงแรมในย่านเงียบสงบ พร้อม Wi-Fi และที่จอดรถ',
    highlights: ['โรงแรม', 'Wi-Fi', 'ที่จอดรถ'],
  },
  29: {
    description: 'โรงแรม 3 ดาว พร้อมพื้นที่ส่วนกลาง ระเบียง และห้องอาหาร',
    highlights: ['โรงแรม', 'ห้องอาหาร', 'ห้วยขวาง'],
  },
  30: {
    description: 'โรงแรมพร้อมสระว่ายน้ำ สวน และที่จอดรถ',
    highlights: ['โรงแรม', 'สระว่ายน้ำ', 'ห้วยขวาง'],
  },
};

const IMAGE_SERVER = '';

function imageUrl(path) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${IMAGE_SERVER}${path.startsWith('/') ? '' : '/'}${path}`;
}

function getDetailImages(hotel) {
  const id = String(hotel.id).padStart(3, '0');

  return [
    `/images/detail/bath/hotel_${id}_bathroom.webp`,
    `/images/detail/bedroom/hotel_${id}_room.webp`,
  ];
}

export default function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [type, setType] = useState('ทั้งหมด');
  const [sort, setSort] = useState('recommended');
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = onValue(
      ref(db, 'hotels'),
      (snapshot) => {
        const value = snapshot.val() || {};
        const records = Object.entries(value)
          .filter(([, hotel]) => hotel && typeof hotel === 'object')
          .map(([key, hotel]) => ({
            ...hotel,
            id: hotel.id ?? (Number(key) || key),
          }));

        setHotels(records);
        setLoading(false);
        setError('');
      },
      (firebaseError) => {
        setError(firebaseError.message || 'อ่านข้อมูลจาก Firebase ไม่สำเร็จ');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const types = useMemo(
    () => ['ทั้งหมด', ...new Set(hotels.map((hotel) => hotel.type).filter(Boolean))],
    [hotels]
  );

  const visibleHotels = useMemo(() => {
    let result = hotels.filter((hotel) => {
      const searchText = [
        hotel.name,
        hotel.area,
        hotel.distance,
        hotel.type,
        hotel.code,
        ...(Array.isArray(hotel.tags) ? hotel.tags : []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return (
        searchText.includes(query.trim().toLowerCase()) &&
        (type === 'ทั้งหมด' || hotel.type === type) &&
        (!maxPrice || Number(hotel.price) <= maxPrice)
      );
    });

    if (sort === 'priceLow') {
      result = [...result].sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === 'priceHigh') {
      result = [...result].sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sort === 'rating') {
      result = [...result].sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return result;
  }, [hotels, query, type, sort, maxPrice]);

  const detail = selectedHotel ? HOTEL_DETAILS[selectedHotel.id] || {} : {};
  const detailImages = selectedHotel ? getDetailImages(selectedHotel) : [];
  const safeImageIndex = detailImages.length
    ? currentImageIndex % detailImages.length
    : 0;

  useEffect(() => {
    if (!selectedHotel) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') setSelectedHotel(null);

      if (event.key === 'ArrowRight' && detailImages.length > 1) {
        setCurrentImageIndex((index) => (index + 1) % detailImages.length);
      }

      if (event.key === 'ArrowLeft' && detailImages.length > 1) {
        setCurrentImageIndex(
          (index) => (index - 1 + detailImages.length) % detailImages.length
        );
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedHotel, detailImages.length]);

  return (
    <>
      <header className="nav">
        <a className="brand" href="#home" style={{ textDecoration: 'none' }}>
          <span className="logo">
            <img
              src={imageUrl('/images/Logo/Logo.webp')}
              alt="TripNest"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 12,
              }}
            />
          </span>
          <span>TripNest</span>
        </a>

        <nav>
          <a href="#home">หน้าแรก</a>
          <a href="#hotels">แนะนำที่พัก</a>
          <a href="#about">เกี่ยวกับเรา</a>
        </nav>

        <a className="login" href="#hotels">ค้นหาที่พัก</a>
      </header>

      <section
        className="hero"
        id="home"
        style={{
          backgroundImage:
            `linear-gradient(90deg,rgba(8,27,45,.88),rgba(8,27,45,.48)),` +
            `url('${imageUrl('/images/hero/hero.webp')}')`,
        }}
      >
        <div className="hero-inner">
          <div className="eyebrow">ACCOMMODATION RECOMMENDATION</div>
          <h1>
            ค้นหาที่พักที่
            <br />
            <span>เหมาะกับการเดินทางของคุณ</span>
          </h1>
          <p>ค้นหาโรงแรม โฮสเทล และอพาร์ตเมนต์ พร้อมข้อมูลราคา ทำเล และคะแนนรีวิวในที่เดียว</p>

          <form className="search-box" onSubmit={(event) => event.preventDefault()}>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="ค้นหาชื่อที่พัก / ทำเล / แท็ก"
              aria-label="ค้นหาที่พัก"
            />

            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              aria-label="ประเภทที่พัก"
            >
              {types.map((item) => <option key={item}>{item}</option>)}
            </select>

            <button type="submit">ค้นหา</button>
          </form>
        </div>
      </section>

      <main>
        <section className="section" id="hotels">
          <div className="section-head">
            <div>
              <div className="eyebrow">RECOMMENDED FOR YOU</div>
              <h2>ที่พักแนะนำ</h2>
              <p>
                {loading
                  ? 'กำลังโหลดข้อมูลจาก Firebase...'
                  : error
                    ? `อ่านข้อมูลไม่สำเร็จ: ${error}`
                    : `คัดสรรที่พักยอดนิยมและคุ้มค่าสำหรับคุณ · พบ ${visibleHotels.length} จาก ${hotels.length} รายการ`}
              </p>
            </div>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="เรียงลำดับ"
            >
              <option value="recommended">แนะนำ</option>
              <option value="priceLow">ราคาต่ำไปสูง</option>
              <option value="priceHigh">ราคาสูงไปต่ำ</option>
              <option value="rating">คะแนนสูงสุด</option>
            </select>
          </div>

          <div className="chips" aria-label="กรองตามราคา">
            <button type="button" onClick={() => setMaxPrice(1000)}>ไม่เกิน ฿1,000</button>
            <button type="button" onClick={() => setMaxPrice(1500)}>ไม่เกิน ฿1,500</button>
            <button type="button" onClick={() => setMaxPrice(2500)}>ไม่เกิน ฿2,500</button>
            <button type="button" onClick={() => setMaxPrice(0)}>ทั้งหมด</button>
          </div>

          {loading ? (
            <p>กำลังโหลดรายการที่พัก...</p>
          ) : error ? (
            <p role="alert">เชื่อมต่อ Firebase ไม่สำเร็จ: {error}</p>
          ) : visibleHotels.length === 0 ? (
            <p>ไม่พบที่พักที่ตรงกับเงื่อนไข</p>
          ) : (
            <div className="cards" id="cards">
              {visibleHotels.map((hotel) => (
                <article className="card" key={hotel.id}>
                  <img
                    src={imageUrl(hotel.image)}
                    alt={hotel.name || 'รูปที่พัก'}
                    loading="lazy"
                  />

                  <div className="card-body">
                    <div className="card-topline">
                      <span className="tag">{hotel.type || 'ที่พัก'}</span>
                      <span className="rating">★ {hotel.rating ?? '-'}</span>
                    </div>

                    <h3>{hotel.name || 'ไม่มีชื่อที่พัก'}</h3>

                    <div className="meta">
                      📍 {hotel.area || '-'}
                      {hotel.distance ? ` · ${hotel.distance}` : ''}
                    </div>

                    <div className="tags">
                      {(Array.isArray(hotel.tags) ? hotel.tags : []).map((tag, index) => (
                        <span className="tag" key={`${hotel.id}-${index}`}>{tag}</span>
                      ))}
                    </div>

                    <div className="price">
                      <strong>
                        ฿{Number(hotel.price || 0).toLocaleString()}
                        <small> / คืน</small>
                      </strong>
                      <button
                        className="login detail-link"
                        type="button"
                        onClick={() => {
                          setSelectedHotel(hotel);
                          setCurrentImageIndex(0);
                        }}
                      >
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="about" id="about">
          <div>
            <div className="eyebrow">ABOUT TRIPNEST</div>
            <h2>ค้นหาที่พักได้ง่ายขึ้น</h2>
          </div>

          <div className="features">
            <div>
              <b>ค้นหา</b>
              <h3>ค้นหาที่พัก</h3>
              <p>ค้นหาด้วยชื่อที่พัก ทำเล หรือแท็ก</p>
            </div>
            <div>
              <b>เปรียบเทียบ</b>
              <h3>กรองราคา</h3>
              <p>เลือกช่วงราคาและเรียงรายการตามความต้องการ</p>
            </div>
            <div>
              <b>ข้อมูลจริง</b>
              <h3>เชื่อมต่อ Firebase</h3>
              <p>รายการที่พักโหลดจาก Realtime Database</p>
            </div>
          </div>
        </section>
      </main>

      <footer>TripNest — Accommodation Recommendation</footer>

      {selectedHotel && (
        <div className="detail-modal show" onClick={() => setSelectedHotel(null)}>
          <div
            className="detail-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`รายละเอียด ${selectedHotel.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="detail-close"
              type="button"
              onClick={() => setSelectedHotel(null)}
              aria-label="ปิด"
            >
              ×
            </button>

            <div className="gallery">
              {detailImages.length > 1 && (
                <button
                  className="gallery-arrow left"
                  type="button"
                  aria-label="รูปก่อนหน้า"
                  onClick={() =>
                    setCurrentImageIndex(
                      (safeImageIndex - 1 + detailImages.length) % detailImages.length
                    )
                  }
                >
                  ‹
                </button>
              )}

              <img
                src={imageUrl(detailImages[safeImageIndex])}
                alt={`${selectedHotel.name} รูปที่ ${safeImageIndex + 1}`}
              />

              {detailImages.length > 1 && (
                <button
                  className="gallery-arrow right"
                  type="button"
                  aria-label="รูปถัดไป"
                  onClick={() =>
                    setCurrentImageIndex((safeImageIndex + 1) % detailImages.length)
                  }
                >
                  ›
                </button>
              )}

              <div className="gallery-counter">
                {safeImageIndex + 1} / {detailImages.length}
              </div>
            </div>

            {detailImages.length > 1 && (
              <div className="gallery-thumbs">
                {detailImages.map((src, index) => (
                  <button
                    className={`thumb ${index === safeImageIndex ? 'active' : ''}`}
                    type="button"
                    key={src}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`ดูรูปที่ ${index + 1}`}
                  >
                    <img src={imageUrl(src)} alt={`รูปที่ ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="detail-info">
              <div>
                <span className="tag">{selectedHotel.type || 'ที่พัก'}</span>
                <span className="rating">★ {selectedHotel.rating ?? '-'}</span>
                <h2>{selectedHotel.name}</h2>
                <p>
                  📍 {selectedHotel.area || '-'}
                  {selectedHotel.distance ? ` · ${selectedHotel.distance}` : ''}
                </p>
              </div>

              <div className="detail-price">
                ฿{Number(selectedHotel.price || 0).toLocaleString()}
                <small> / คืน</small>
              </div>
            </div>

            <div className="detail-description">
              {detail.description ||
                `ที่พัก ${selectedHotel.name} ใน${selectedHotel.area || 'กรุงเทพฯ'}`}
            </div>

            <div className="detail-highlights">
              {(detail.highlights ||
                (Array.isArray(selectedHotel.tags) ? selectedHotel.tags : [])
              ).map((highlight, index) => (
                <span key={`${selectedHotel.id}-highlight-${index}`}>{highlight}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}