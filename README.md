<p align="center">
  <img src="docs/preview/hero.svg" alt="Web Masjid Korea — ilustrasi website pencari masjid" width="100%">
</p>

<h1 align="center">Web Masjid Korea</h1>

<p align="center">
  <b>Direktori masjid Korea Selatan versi web.</b><br>
  React · TypeScript · Vite · Tailwind · Firebase
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white">
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white">
</p>

---

## ✨ Preview

<p align="center">
  <img src="docs/preview/hero.png" alt="Mockup gelap Web Masjid Korea" width="90%">
</p>

> **Catatan:** gambar di atas adalah *ilustrasi konsep*, bukan screenshot asli.

---

## 📖 Tentang

Versi web dari direktori masjid Korea Selatan. Dibangun dengan React + TypeScript dan Vite,
di-styling dengan Tailwind, serta memakai Firebase sebagai backend. Rute halaman dikelola
`react-router-dom`.

---

## 🌟 Fitur

- 🏠 **Home** — sorotan dan navigasi utama
- 🕌 **Daftar masjid** (`MosqueList`)
- 🔎 **Pencarian masjid** (`MosqueSearch`)
- ⚡ **Vite + SWC** untuk dev server cepat
- 🎨 **Tailwind CSS** untuk styling
- ☁️ **Firebase** sebagai backend

---

## 🛠️ Tech Stack

| Area | Pilihan |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Ikon | Heroicons |
| Routing | React Router |
| Backend | Firebase |

---

## 🧱 Struktur

```text
src/
├── assets/      # Gambar & logo
├── components/  # Komponen UI
├── config/      # Konfigurasi aplikasi
├── pages/       # HomePage, MosqueList, MosqueSearch, TestPage
├── routes/      # Definisi rute
├── types/       # Tipe TypeScript
└── utils/       # Utilitas
```

---

## 🚀 Menjalankan

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```

Konfigurasi Firebase ada di `src/config`; isi sesuai project-mu.

---

## 🧹 Lint

```bash
npm run lint
```
