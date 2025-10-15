# 🚀 Vortiq CMS

Vortiq CMS adalah Content Management System yang dibangun menggunakan **Strapi v5.23.0** untuk mengelola konten website perusahaan dengan fitur-fitur modern dan fleksibel.

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Proyek](#-struktur-proyek)
- [Persyaratan Sistem](#-persyaratan-sistem)
- [Instalasi](#-instalasi)
- [Konfigurasi](#-konfigurasi)
- [Penggunaan](#-penggunaan)
- [API Endpoints](#-api-endpoints)
- [Content Types](#-content-types)
- [Deployment](#-deployment)
- [Kontribusi](#-kontribusi)

## ✨ Fitur Utama

### 🎯 Content Management
- **Artikel & Blog**: Sistem manajemen artikel dengan kategori dan penulis
- **Produk**: Manajemen katalog produk dengan detail lengkap
- **Layanan**: Pengelolaan layanan perusahaan dengan komponen yang dapat digunakan kembali
- **Halaman Statis**: Home, About, Contact, Footer, dan halaman lainnya

### 🎨 Komponen Dinamis
- **Dynamic Zones**: Konten yang dapat disesuaikan dengan komponen seperti media, quote, rich-text, dan slider
- **Reusable Components**: Komponen yang dapat digunakan kembali untuk features, capabilities, dan services
- **Media Management**: Upload dan manajemen file gambar, video, dan dokumen

### 🔧 Fitur Teknis
- **Draft & Publish**: Sistem draft untuk preview konten sebelum dipublikasikan
- **SEO Ready**: Dukungan meta tags dan SEO optimization
- **Multi-database Support**: SQLite (default), PostgreSQL, MySQL
- **API Documentation**: Dokumentasi API otomatis
- **User Permissions**: Sistem role dan permission yang fleksibel

## 🛠 Teknologi yang Digunakan

- **Backend**: Strapi v5.23.0
- **Database**: SQLite (default), PostgreSQL, MySQL
- **Node.js**: v18.0.0 - v22.x.x
- **Package Manager**: npm v6.0.0+
- **Plugins**:
  - `@strapi/plugin-users-permissions`
  - `@strapi/plugin-documentation`
  - `@strapi/plugin-cloud`
  - `strapi-v5-plugin-populate-deep`

## 📁 Struktur Proyek

```
vortiq_cms/
├── profile-be/                 # Backend Strapi
│   ├── config/                 # Konfigurasi aplikasi
│   │   ├── admin.js           # Konfigurasi admin panel
│   │   ├── api.js             # Konfigurasi API
│   │   ├── database.js        # Konfigurasi database
│   │   ├── middlewares.js     # Middleware
│   │   ├── plugins.js         # Plugin configuration
│   │   └── server.js          # Server configuration
│   ├── src/
│   │   ├── api/               # API endpoints
│   │   │   ├── article/       # Artikel management
│   │   │   ├── product/       # Produk management
│   │   │   ├── services/      # Layanan management
│   │   │   ├── home/          # Halaman home
│   │   │   ├── about/         # Halaman about
│   │   │   ├── contact/       # Halaman contact
│   │   │   └── ...            # Content types lainnya
│   │   ├── components/        # Komponen yang dapat digunakan kembali
│   │   │   └── shared/        # Komponen shared
│   │   └── extensions/        # Ekstensi Strapi
│   ├── data/                  # Data seed dan uploads
│   ├── scripts/               # Script utilitas
│   └── package.json           # Dependencies
```

## 💻 Persyaratan Sistem

- **Node.js**: v18.0.0 - v22.x.x
- **npm**: v6.0.0 atau lebih tinggi
- **Database**: SQLite (default), PostgreSQL, atau MySQL
- **RAM**: Minimal 2GB
- **Storage**: Minimal 1GB ruang kosong

## 🚀 Instalasi

### 1. Clone Repository
```bash
git clone <repository-url>
cd vortiq_cms/profile-be
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Buat file `.env` di root direktori `profile-be`:

```env
# Database Configuration
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# Untuk PostgreSQL (opsional)
# DATABASE_CLIENT=postgres
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_NAME=strapi
# DATABASE_USERNAME=strapi
# DATABASE_PASSWORD=strapi

# Server Configuration
HOST=0.0.0.0
PORT=1337

# App Keys (generate dengan: node -e "console.log(require('crypto').randomBytes(16).toString('base64'))")
APP_KEYS=your-app-keys-here
```

### 4. Seed Data (Opsional)
```bash
npm run seed:example
```

## ⚙️ Konfigurasi

### Database Configuration
CMS ini mendukung multiple database:

- **SQLite** (default): Untuk development
- **PostgreSQL**: Untuk production
- **MySQL**: Alternatif production

### Server Configuration
- **Host**: 0.0.0.0 (default)
- **Port**: 1337 (default)
- **Environment**: development/production

## 🎮 Penggunaan

### Development Mode
```bash
npm run develop
# atau
npm run dev
```

### Production Mode
```bash
npm run build
npm run start
```

### Admin Panel
Akses admin panel di: `http://localhost:1337/admin`

### API Console
```bash
npm run console
```

## 🔗 API Endpoints

### Public Endpoints
- `GET /api/articles` - Daftar artikel
- `GET /api/articles/:id` - Detail artikel
- `GET /api/products` - Daftar produk
- `GET /api/services` - Daftar layanan
- `GET /api/categories` - Daftar kategori
- `GET /api/authors` - Daftar penulis

### Admin Endpoints
- `POST /api/articles` - Buat artikel baru
- `PUT /api/articles/:id` - Update artikel
- `DELETE /api/articles/:id` - Hapus artikel

## 📝 Content Types

### 1. Article
- **Fields**: title, description, slug, cover, author, category, blocks
- **Features**: Draft/Publish, SEO-friendly URLs, Dynamic content blocks

### 2. Product
- **Fields**: id_content, title, description, dashboardImage, icon, details, data
- **Features**: Media management, Component-based details

### 3. Services
- **Fields**: data (repeatable services2 component)
- **Features**: Nested components, Card-based layout

### 4. Home
- **Fields**: Judul, subjudul, narasi
- **Features**: Rich text content

### 5. Global
- **Fields**: Site settings, SEO configuration
- **Features**: Site-wide configuration

## 🚀 Deployment

### Strapi Cloud
```bash
npm run deploy
```

### Manual Deployment
1. Build aplikasi:
```bash
npm run build
```

2. Setup production environment variables

3. Start aplikasi:
```bash
npm run start
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
```

## 🔧 Customization

### Menambah Content Type Baru
1. Buat folder baru di `src/api/`
2. Definisikan schema di `content-types/`
3. Buat controller, routes, dan services
4. Restart aplikasi

### Menambah Komponen Shared
1. Buat file JSON di `src/components/shared/`
2. Definisikan struktur komponen
3. Gunakan di content types yang diinginkan

## 📚 Dokumentasi API

Dokumentasi API otomatis tersedia di:
- Development: `http://localhost:1337/documentation`
- Production: `https://your-domain.com/documentation`

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

## 🆘 Support

Jika mengalami masalah atau memiliki pertanyaan:

1. Cek [dokumentasi Strapi](https://docs.strapi.io)
2. Buat issue di repository ini
3. Hubungi tim development

## 🔄 Changelog

### v1.0.0
- Initial release
- Basic content management
- Article, Product, Services management
- Admin panel setup
- API documentation

---

**Dibuat dengan ❤️ menggunakan Strapi**
# vortiqx_strapi
