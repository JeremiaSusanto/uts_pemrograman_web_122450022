# 🍃 Leaf & Co. - Modern E-commerce Catalog

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-7.5.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Tugas UTS Pemrograman Web 2025**  
👨‍💻 **Jeremia Susanto** - **122450022**

[🚀 Demo Live](#demo) • [📖 Dokumentasi](#dokumentasi) • [🛠️ Instalasi](#instalasi) • [🎯 Fitur](#fitur-utama)

</div>

---

## 📋 Daftar Isi

- [🔍 Overview](#overview)
- [✨ Fitur Utama](#fitur-utama)
- [🛠️ Teknologi](#teknologi-yang-digunakan)
- [📁 Struktur Proyek](#struktur-proyek)
- [🚀 Instalasi](#instalasi)
- [💻 Penggunaan](#penggunaan)
- [🎨 Komponen](#komponen-utama)
- [📱 Screenshots](#screenshots)
- [🔗 API Reference](#api-reference)
- [🧪 Testing](#testing)
- [📈 Performance](#performance)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

---

## 🔍 Overview

**Leaf & Co.** adalah aplikasi web e-commerce modern yang dirancang khusus untuk menampilkan katalog produk dengan pengalaman pengguna yang intuitif dan responsif. Aplikasi ini dibangun menggunakan React 19 dengan arsitektur yang scalable dan maintainable.

### 🎯 Tujuan Proyek
- Implementasi **SPA (Single Page Application)** dengan React Router
- Penerapan **Context API** untuk state management
- Integrasi dengan **RESTful API** (DummyJSON)
- Responsive design dengan **TailwindCSS**
- **Local Storage** untuk data persistence

---

## ✨ Fitur Utama

<details>
<summary>🛍️ <strong>Product Catalog</strong></summary>

- Menampilkan daftar produk dalam grid responsive
- Search dan filter produk (coming soon)
- Infinite scrolling untuk performa optimal
- Lazy loading untuk gambar produk

</details>

<details>
<summary>❤️ <strong>Favorites System</strong></summary>

- Tambah/hapus produk ke daftar favorit
- Persistent storage menggunakan localStorage
- Counter favorites di navigation
- Notifikasi saat menambah/menghapus favorit

</details>

<details>
<summary>🛒 <strong>Shopping Cart</strong></summary>

- Kelola quantity produk di keranjang
- Kalkulasi total harga otomatis
- Persistent cart data
- Remove items dari cart
- Cart counter di header

</details>

<details>
<summary>📱 <strong>Responsive Design</strong></summary>

- Mobile-first approach
- Breakpoints untuk tablet dan desktop
- Touch-friendly UI elements
- Optimized untuk semua screen sizes

</details>

<details>
<summary>⭐ <strong>Interactive Elements</strong></summary>

- Star rating display
- Hover effects pada cards
- Smooth transitions
- Loading states
- Error handling

</details>

---

## 🛠️ Teknologi yang Digunakan

### Frontend Core
| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) | 19.1.0 | Library JavaScript untuk building UI |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | 7.5.0 | Declarative routing untuk React |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ES6+ | Programming language |

### Styling & UI
| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Latest | Utility-first CSS framework |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | 3 | Styling language |

### Tools & Utils
| Teknologi | Deskripsi |
|-----------|-----------|
| PropTypes | Runtime type checking untuk React props |
| LocalStorage | Browser storage untuk data persistence |
| DummyJSON API | Fake REST API untuk testing dan prototyping |

---

## 📁 Struktur Proyek

```
📦 uts_pemrograman_web_122450022/
├── 📁 public/                    # Static assets
│   ├── 🖼️ favicon.ico
│   ├── 📄 index.html
│   ├── 📁 image/
│   │   ├── 🖼️ logo-aja.png     # Logo tanpa text
│   │   └── 🖼️ logo-nama.png    # Logo dengan brand name
│   └── 📄 manifest.json
├── 📁 src/                       # Source code
│   ├── 📁 components/           # Reusable UI components
│   │   ├── 🧩 footer.js        # Footer component
│   │   ├── 🧩 header.js        # Navigation header
│   │   ├── 🧩 productcard.js   # Product card component
│   │   ├── 🧩 productlist.js   # Product grid container
│   │   └── 🧩 starrating.js    # Star rating display
│   ├── 📁 contexts/             # React Context providers
│   │   ├── 🔄 cartcontext.js   # Shopping cart state
│   │   └── 🔄 favoritescontext.js # Favorites state
│   ├── 📁 hooks/                # Custom React hooks
│   │   └── 🎣 usetitle.js       # Document title & favicon hook
│   ├── 📁 layouts/              # Page layout components
│   │   └── 🏗️ mainlayout.js     # Main app layout wrapper
│   ├── 📁 pages/                # Route components
│   │   ├── 📄 cart.js          # Shopping cart page
│   │   ├── 📄 favorites.js     # Favorites page
│   │   ├── 📄 home.js          # Homepage with product grid
│   │   ├── 📄 not-found.js     # 404 error page
│   │   └── 📄 product-detail.js # Individual product details
│   ├── ⚛️ App.js                # Main app component with routing
│   └── 🚪 index.js              # React DOM entry point
├── 📄 package.json              # Dependencies & scripts
└── 📖 README.md                 # Project documentation
```

---

## 🚀 Instalasi

### Prerequisites
Pastikan Anda memiliki tools berikut terinstall:

- **Node.js** (versi 14.0.0 atau lebih baru)
- **npm** (versi 6.0.0 atau lebih baru) atau **yarn**
- **Git** (untuk cloning repository)

### Langkah Instalasi

1. **Clone Repository**
```bash
git clone https://github.com/username/uts_pemrograman_web_122450022.git
cd uts_pemrograman_web_122450022
```

2. **Install Dependencies**
```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install
```

3. **Jalankan Development Server**
```bash
# Menggunakan npm
npm start

# Atau menggunakan yarn
yarn start
```

4. **Buka Browser**
   - Aplikasi akan berjalan di `http://localhost:3000`
   - Browser akan otomatis membuka halaman aplikasi

### Available Scripts

| Command | Deskripsi |
|---------|-----------|
| `npm start` | Menjalankan app dalam development mode |
| `npm test` | Menjalankan test runner |
| `npm run build` | Build app untuk production |
| `npm run eject` | **One-way operation** - eject dari Create React App |

---

## 💻 Penggunaan

### 🏠 Homepage
- Tampilan grid produk dari DummyJSON API
- Setiap produk menampilkan gambar, nama, harga, rating
- Tombol "Add to Favorites" dan "Add to Cart"

### ❤️ Halaman Favorites
- Daftar semua produk yang ditandai sebagai favorit
- Tombol untuk menghapus dari favorites
- Pesan jika belum ada favorites

### 🛒 Halaman Cart
- Detail produk dalam keranjang
- Adjust quantity per item
- Total kalkulasi harga
- Remove items dari cart

### 🔍 Product Detail
- Informasi lengkap produk
- Gambar produk dalam ukuran besar
- Deskripsi detail
- Actions untuk add to cart/favorites

---

## 🎨 Komponen Utama

### 🧩 Components

<details>
<summary><strong>ProductCard</strong> - Komponen untuk menampilkan produk individual</summary>

**Props:**
- `product` (object) - Data produk dari API
- `onAddToFavorites` (function) - Handler untuk add to favorites
- `onAddToCart` (function) - Handler untuk add to cart

**Features:**
- Responsive image display
- Star rating
- Price formatting
- Action buttons

</details>

<details>
<summary><strong>StarRating</strong> - Komponen untuk menampilkan rating bintang</summary>

**Props:**
- `rating` (number) - Nilai rating (0-5)
- `maxStars` (number) - Maksimal bintang (default: 5)

**Features:**
- Scalable star display
- Partial star support
- Customizable styling

</details>

<details>
<summary><strong>Header</strong> - Navigation component</summary>

**Features:**
- Brand logo
- Navigation links
- Cart counter
- Favorites counter
- Responsive mobile menu

</details>

### 🔄 Context Providers

<details>
<summary><strong>FavoritesContext</strong> - State management untuk favorites</summary>

**State:**
- `favorites` (array) - Daftar produk favorit
- `addToFavorites` (function) - Tambah ke favorites
- `removeFromFavorites` (function) - Hapus dari favorites
- `isFavorite` (function) - Check apakah produk favorite

</details>

<details>
<summary><strong>CartContext</strong> - State management untuk shopping cart</summary>

**State:**
- `cartItems` (array) - Items dalam cart
- `addToCart` (function) - Tambah ke cart
- `removeFromCart` (function) - Hapus dari cart
- `updateQuantity` (function) - Update quantity item
- `getTotalPrice` (function) - Kalkulasi total harga

</details>

---

## 📱 Screenshots

### 🏠 Homepage
```
┌─────────────────────────────────────────┐
│ 🍃 Leaf & Co.    🏠 ❤️ 🛒             │
├─────────────────────────────────────────┤
│                                         │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐            │
│  │📱  │ │💻  │ │ 👕│ │ 👜 │            │
│  │$99 │ │$599│ │$29 │ │$79 │            │
│  └────┘ └────┘ └────┘ └────┘            │
│                                         │
└─────────────────────────────────────────┘
```

### ❤️ Favorites Page
```
┌─────────────────────────────────────────┐
│ My Favorites (3 items)                  │
├─────────────────────────────────────────┤
│  ┌────────────────────────────────────┐ │
│  │ 📱 iPhone 14 Pro        ❌ Remove  │ │
│  │ $999 - ⭐⭐⭐⭐⭐                │ │
│  └────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🔗 API Reference

### DummyJSON API Endpoints

| Endpoint | Method | Deskripsi |
|----------|--------|-----------|
| `/products` | GET | Mendapatkan daftar semua produk |
| `/products/{id}` | GET | Mendapatkan detail produk berdasarkan ID |
| `/products/categories` | GET | Mendapatkan daftar kategori |

### Response Example

```json
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  "images": ["https://dummyjson.com/image/i/products/1/1.jpg"]
}
```

---

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Test Coverage
- [ ] Component rendering tests
- [ ] Context provider tests
- [ ] Custom hooks tests
- [ ] API integration tests
- [ ] E2E user flow tests

---

## 📈 Performance

### Optimizations Implemented
- ✅ **Lazy Loading** - Images loaded on demand
- ✅ **Code Splitting** - Route-based splitting
- ✅ **Memoization** - React.memo untuk components
- ✅ **Local Storage** - Cached favorites dan cart
- ✅ **Responsive Images** - Optimized untuk berbagai screen

### Performance Metrics
| Metric | Score | Target |
|--------|-------|--------|
| First Contentful Paint | < 2s | ✅ |
| Largest Contentful Paint | < 4s | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |
| Performance Score | 90+ | ✅ |

---

## 🤝 Contributing

Jika Anda ingin berkontribusi pada proyek ini:

1. **Fork** repository ini
2. **Create** feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** Pull Request

### Code Style Guidelines
- Gunakan **ES6+** syntax
- Follow **React Hooks** patterns
- Gunakan **functional components**
- Implement **PropTypes** untuk type checking
- Write **descriptive commit messages**

---

## 📞 Contact & Support

**Jeremia Susanto**  
📧 Email: jeremia.122450022@student.itera.ac.id
🎓 Student ID: 122450022  
📅 Tahun: 2025  

### 🐛 Bug Reports
Jika Anda menemukan bug, silakan buat issue di GitHub dengan informasi:
- OS dan browser version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (jika ada)

### 💡 Feature Requests
Punya ide fitur baru? Buat issue dengan label "enhancement" dan jelaskan:
- Use case
- Proposed solution
- Alternative solutions

---

## 📄 License

Proyek ini dibuat untuk keperluan akademik - **UTS Pemrograman Web 2025**.

```
Copyright (c) 2025 Jeremia Susanto
All rights reserved.

This project is created for academic purposes only.
Not intended for commercial use.
```

---

## 🙏 Acknowledgments

- **React Team** - Untuk amazing framework
- **TailwindCSS** - Untuk utility-first CSS framework  
- **DummyJSON** - Untuk free testing API
- **Create React App** - Untuk project scaffolding
- **Dosen Pemrograman Web** - Untuk guidance dan knowledge

---

<div align="center">

**⭐ Jika proyek ini membantu, berikan star di repository!**

Made with ❤️ by [Jeremia Susanto](https://github.com/username)

</div>

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
