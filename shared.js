// ─── SHARED PRODUCT DATA ─────────────────────────────────
const products = [
  { id:1, name:'iPhone 16 Pro Max', brand:'Apple', category:'Phones', price:134900, originalPrice:149900, badge:'sale', rating:4.9, reviews:2341, stock:'In Stock', colors:['#1c1c1e','#f5e642','#b0c4de','#e8c5a0'],
    img:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80&fit=crop','https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80&fit=crop'],
    desc:'The most powerful iPhone ever. A18 Pro chip, Pro camera system with 5x optical zoom, titanium design.',
    specs:{Display:'6.9" OLED Super Retina XDR',Processor:'A18 Pro Chip',RAM:'8GB',Storage:'256GB / 512GB / 1TB',Camera:'48MP + 48MP + 12MP',Battery:'4685 mAh',OS:'iOS 18'} },
  { id:2, name:'Samsung Galaxy S25 Ultra', brand:'Samsung', category:'Phones', price:124999, originalPrice:139999, badge:'hot', rating:4.8, reviews:1876, stock:'In Stock', colors:['#1a1a2e','#e8e8e8','#2d4a22'],
    img:'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80&fit=crop'],
    desc:'Ultimate Android powerhouse with S Pen, 200MP camera, Snapdragon 8 Elite.',
    specs:{Display:'6.9" QHD+ AMOLED',Processor:'Snapdragon 8 Elite',RAM:'12GB',Storage:'256GB–1TB',Camera:'200MP + 50MP + 10MP',Battery:'5000 mAh',OS:'Android 15'} },
  { id:3, name:'MacBook Pro 16" M4 Max', brand:'Apple', category:'Laptops', price:299900, originalPrice:329900, badge:'new', rating:4.9, reviews:987, stock:'In Stock', colors:['#1c1c1e','#e8e8e8'],
    img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80&fit=crop','https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80&fit=crop'],
    desc:'Supercharged by M4 Max. Liquid Retina XDR display, up to 128GB unified memory.',
    specs:{Display:'16.2" Liquid Retina XDR',Processor:'Apple M4 Max',RAM:'Up to 128GB',Storage:'Up to 8TB SSD',GPU:'40-core GPU',Battery:'Up to 22 hours',Weight:'2.14 kg'} },
  { id:4, name:'Sony WH-1000XM6', brand:'Sony', category:'Audio', price:34990, originalPrice:39990, badge:'sale', rating:4.8, reviews:3210, stock:'In Stock', colors:['#1c1c1e','#e8e8e8','#1a3a5c'],
    img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&fit=crop'],
    desc:'Industry-leading noise cancellation. 30-hour battery, multipoint connection.',
    specs:{Type:'Over-Ear Wireless',ANC:'Dual Noise Sensor',Battery:'30 hours',Charging:'USB-C',Codec:'LDAC, AAC, SBC',Weight:'250g'} },
  { id:5, name:'Apple Watch Ultra 3', brand:'Apple', category:'Wearables', price:89900, originalPrice:99900, badge:'new', rating:4.9, reviews:654, stock:'In Stock', colors:['#b0b0b0','#ff6b35','#1c1c1e'],
    img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&fit=crop'],
    desc:'Most rugged Apple Watch. Titanium case, 72-hour battery, dual-frequency GPS.',
    specs:{Case:'49mm Titanium',GPS:'L1+L5 dual-frequency',Battery:'72 hours',Water:'100m WR',Health:'ECG, Blood Oxygen',OS:'watchOS 11'} },
  { id:6, name:'Dell XPS 15 OLED', brand:'Dell', category:'Laptops', price:189900, originalPrice:209900, badge:'sale', rating:4.7, reviews:432, stock:'In Stock', colors:['#1c1c1e','#e8e8e8'],
    img:'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80&fit=crop'],
    desc:'Ultra-thin 15" OLED powerhouse. Intel Core Ultra 9, NVIDIA RTX 4070.',
    specs:{Display:'15.6" 3.5K OLED 120Hz',Processor:'Intel Core Ultra 9',RAM:'32GB DDR5',Storage:'1TB NVMe SSD',GPU:'RTX 4070',Battery:'86Wh',Weight:'1.86 kg'} },
  { id:7, name:'AirPods Pro 3', brand:'Apple', category:'Audio', price:26900, originalPrice:29900, badge:'new', rating:4.8, reviews:5621, stock:'In Stock', colors:['#fff'],
    img:'https://images.unsplash.com/photo-1588423771073-b8903fead85b?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1588423771073-b8903fead85b?w=600&q=80&fit=crop'],
    desc:'H2 chip, next-gen ANC, Adaptive Audio, and hearing health features.',
    specs:{Chip:'Apple H2',ANC:'Next-gen ANC',Battery:'6.5 hrs (30 hrs case)',Resistance:'IP54',Connectivity:'Bluetooth 5.3'} },
  { id:8, name:'PS5 Pro Console', brand:'Sony', category:'Gaming', price:59990, originalPrice:69990, badge:'hot', rating:4.9, reviews:8765, stock:'In Stock', colors:['#fff','#1c1c1e'],
    img:'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80&fit=crop'],
    desc:'Enhanced 4K visuals, PlayStation Spectral Super Resolution, ultra-high-speed SSD.',
    specs:{CPU:'8x Zen 2 @ 3.5GHz',GPU:'33.5 TFLOPS',RAM:'16GB GDDR6',Storage:'2TB SSD',Resolution:'Up to 8K',Frames:'Up to 120fps'} },
  { id:9, name:'Samsung Galaxy Watch 7', brand:'Samsung', category:'Wearables', price:29999, originalPrice:34999, badge:'sale', rating:4.6, reviews:1234, stock:'In Stock', colors:['#1c1c1e','#e8e8e8','#228b22'],
    img:'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80&fit=crop'],
    desc:'BioActive Sensor, sleep coaching, Galaxy AI. 40mm and 44mm sizes.',
    specs:{Display:'Super AMOLED',Processor:'Exynos W1000 (3nm)',RAM:'2GB',Battery:'500mAh / 40hrs',Health:'BioActive, ECG',OS:'Wear OS 5'} },
  { id:10, name:'Sony Alpha A7 V', brand:'Sony', category:'Cameras', price:289900, originalPrice:319900, badge:'new', rating:4.9, reviews:342, stock:'Limited Stock', colors:['#1c1c1e'],
    img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80&fit=crop'],
    desc:'61MP full-frame mirrorless. AI AF, 8-stop stabilization, 4K 120fps.',
    specs:{Sensor:'61MP BSI Full-Frame',AF:'AI Real-time Tracking',ISO:'100–102400',Video:'4K 120fps / 8K 30fps',IBIS:'8-stop',Weight:'514g'} },
  { id:11, name:'Anker 200W GaN Charger', brand:'Anker', category:'Accessories', price:4999, originalPrice:5999, badge:'sale', rating:4.7, reviews:876, stock:'In Stock', colors:['#fff','#1c1c1e'],
    img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop'],
    desc:'200W GaN with 4 ports. Charge MacBook Pro, iPad and 2 phones at once.',
    specs:{Power:'200W Total',Ports:'2x USB-C + 2x USB-A','USB-C 1':'140W Max','USB-C 2':'100W Max',Technology:'GaN II'} },
  { id:12, name:'Logitech MX Master 4', brand:'Logitech', category:'Accessories', price:9999, originalPrice:11999, badge:'new', rating:4.8, reviews:2109, stock:'In Stock', colors:['#1c1c1e','#e8e8e8'],
    img:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&fit=crop',
    imgs:['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&fit=crop'],
    desc:'MagSpeed scrolling, 8K DPI, multi-device flow, 70-day battery.',
    specs:{DPI:'200–8000',Scrolling:'MagSpeed',Battery:'70 days',Connectivity:'Bluetooth + Logi Bolt',Weight:'141g'} },
];

// ─── SHARED CART ──────────────────────────────────────────
function getCart() { try { return JSON.parse(localStorage.getItem('volt_cart') || '[]'); } catch(e) { return []; } }
function saveCart(cart) { try { localStorage.setItem('volt_cart', JSON.stringify(cart)); } catch(e) {} }
function getCartCount() { return getCart().reduce((s,c) => s + c.qty, 0); }

function addToCartById(id, qty=1) {
  let cart = getCart();
  const p = products.find(x => x.id === id);
  if (!p) return;
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty = Math.min(ex.qty + qty, 10);
  else cart.push({id:p.id, name:p.name, brand:p.brand, price:p.price, img:p.img, qty});
  saveCart(cart);
  updateAllCartCounts();
  showToast(p.name + ' added to cart!');
}

function updateAllCartCounts() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
  document.querySelectorAll('.mob-cart-count').forEach(el => el.textContent = count);
}

// ─── SHARED TOAST ─────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t);
    t.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(100px);background:var(--green);color:#0a0a0f;font-family:var(--display);font-size:0.85rem;font-weight:700;padding:0.8rem 1.8rem;z-index:9999;transition:transform 0.3s;white-space:nowrap;'; }
  t.textContent = msg;
  t.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => { t.style.transform = 'translateX(-50%) translateY(100px)'; }, 2500);
}

// ─── SHARED NAV INIT ──────────────────────────────────────
function initNav() {
  updateAllCartCounts();
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (ham && menu) {
    ham.addEventListener('click', function() {
      this.classList.toggle('open');
      menu.classList.toggle('open');
    });
  }
  // highlight active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href]').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
}

// ─── HELPERS ──────────────────────────────────────────────
function fmtPrice(p) { return '₹' + Number(p).toLocaleString('en-IN'); }
function starsHTML(r) { return '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : ''); }
function badgeHTML(b) {
  if (!b) return '';
  const map = {new:'badge-new', sale:'badge-sale', hot:'badge-hot'};
  return `<span class="card-badge ${map[b] || ''}">${b.toUpperCase()}</span>`;
}
function productCardHTML(p) {
  const save = Math.round((p.originalPrice - p.price) / p.originalPrice * 100);
  return `<div class="product-card" onclick="location.href='product.html?id=${p.id}'">
    ${badgeHTML(p.badge)}
    <div class="card-img-wrap">
      <img class="card-img" src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="card-overlay">
        <button class="quick-add" onclick="event.stopPropagation();addToCartById(${p.id})">+ Add to Cart</button>
      </div>
    </div>
    <div class="card-info">
      <div class="card-brand">${p.brand}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-rating"><span class="stars">${starsHTML(p.rating)}</span><span class="rating-count">(${p.reviews.toLocaleString()})</span></div>
      <div class="card-price-row">
        <span class="card-price">${fmtPrice(p.price)}</span>
        <span class="card-original">${fmtPrice(p.originalPrice)}</span>
        <span class="card-save">${save}% off</span>
      </div>
    </div>
  </div>`;
}

window.addEventListener('DOMContentLoaded', initNav);
