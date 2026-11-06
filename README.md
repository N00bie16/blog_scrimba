# My Learning Journal

Website blog pembelajaran frontend yang menampilkan catatan perjalanan belajar dan perkembangan sebagai developer. Proyek ini dibangun sebagai latihan pengembangan React dengan TypeScript dan Tailwind CSS.

## Fitur

- Halaman beranda dengan artikel unggulan dan daftar postingan
- Navigasi antar posting melalui React Router
- Halaman detail untuk setiap artikel
- Tombol **View More** untuk memuat postingan tambahan
- Halaman About berisi profil dan riwayat pembelajaran
- Tampilan responsif untuk desktop dan perangkat mobile
- Halaman Not Found untuk rute yang tidak tersedia

## Teknologi

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS 4
- ESLint

## Menjalankan Proyek

### Prasyarat

- Node.js
- npm atau package manager yang kompatibel

### Instalasi

```bash
npm install
```

### Development server

```bash
npm run dev
```

Buka alamat yang ditampilkan Vite di terminal, biasanya `http://localhost:5173`.

### Build produksi

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

### Pemeriksaan lint

```bash
npm run lint
```

## Struktur Utama

```text
src/
├── components/   # Header, footer, dan daftar posting
├── pages/        # Halaman home, about, detail, layout, dan not found
├── App.tsx       # Konfigurasi routing aplikasi
├── data.ts       # Data artikel
└── index.css     # Gaya global dan konfigurasi Tailwind
```

## Rute

| Rute | Halaman |
| --- | --- |
| `/` | Beranda dan daftar posting |
| `/about` | Profil dan learning journal |
| `/blog/:id` | Detail posting |
| `/*` | Halaman Not Found |
