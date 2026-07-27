# Landing Page Forms → Backend

Panduan field backend dan cara membuat form baru lalu menyambungkannya ke
backend penangkap lead (**https://frm-v1.remohires.com**, repo
`remohires-marketing-backend`).

## 1. Cara kerja singkat

Form landing page (kecuali `/aitalent`) mengirim data ke satu endpoint:

```
POST https://frm-v1.remohires.com/api/submit
Content-Type: application/json
```

> **Pengecualian:** halaman `/aitalent` memakai form lama yang mengirim
> langsung ke **web3forms** (`components/aitalent/match-form.tsx`), bukan ke
> backend ini. Jangan sambungkan ulang ke backend kecuali diminta.

Semua pengiriman dilakukan lewat helper bersama
[`src/lib/submit-lead.ts`](../src/lib/submit-lead.ts) — jangan `fetch` manual,
cukup panggil `submitLead(...)`.

Base URL dan API key diatur lewat environment:

```bash
# .env.local
NEXT_PUBLIC_FORMS_API_URL=http://localhost:4000
NEXT_PUBLIC_FORMS_API_KEY=<sama-dengan-API_KEY-di-backend>
```

## Keamanan koneksi API

Endpoint `/api/submit` dilindungi dua lapis:

1. **Origin allowlist** — hanya request dari domain frontend
   (`https://page.remohires.com`) yang diterima. Origin lain → `403`.
   Diberlakukan lewat CORS (untuk browser) **dan** pengecekan `Origin`/`Referer`
   di sisi server (memblokir klien non-browser).
2. **API key** — setiap request wajib membawa header `x-api-key` yang cocok
   dengan `API_KEY` backend. Tidak cocok → `401`.

Helper `submitLead` otomatis mengirim header `x-api-key` dari
`NEXT_PUBLIC_FORMS_API_KEY`. Karena nilai `NEXT_PUBLIC_*` ikut ter-bundle ke
browser, key ini berfungsi sebagai **gerbang** (dipadukan dengan origin
allowlist), bukan rahasia mutlak.

## 2. Field yang tersedia di backend

Backend menyimpan kolom berikut. Hanya `path` dan `email` yang **wajib**;
sisanya opsional. Field apa pun di luar daftar ini tetap tersimpan di kolom
`raw` (JSON mentah), jadi tidak ada data yang hilang.

| Field       | Wajib | Tipe   | Keterangan                                                    |
|-------------|:-----:|--------|---------------------------------------------------------------|
| `path`      | ✅    | string | Halaman asal. Salah satu: `home`, `quotes`, `teamb`. Menentukan section di dashboard. |
| `email`     | ✅    | string | Email lead. Divalidasi formatnya.                             |
| `name`      | —     | string | Nama lead.                                                    |
| `source`    | —     | string | Penanda form/posisi, mis. `hero_selfcheck`, `bottom_form`, `hero`, `footer`. |
| `qualifier` | —     | string | Jawaban kualifikasi (mis. pilihan self-check).                |
| `industry`  | —     | string | Industri (dipakai form AI Talent).                            |
| `message`   | —     | string | Pesan bebas dari lead.                                         |
| `subject`   | —     | string | Judul/konteks submission (dipakai form AI Talent).            |

`path` valid → section di dashboard admin:

| `path`     | Route landing page | Field yang ditampilkan di dashboard      |
|------------|--------------------|------------------------------------------|
| `home`     | `/`                | name, email, source, qualifier           |
| `quotes`   | `/quotes`          | name, email, source, qualifier           |
| `teamb`    | `/teamb`           | email, source                            |

> `/aitalent` tidak ada di daftar ini karena memakai web3forms, bukan backend.
>
> Menambah `path` baru: daftarkan dulu di backend
> `src/config.js` (objek `PATHS`), lalu tambahkan tipe di `LeadPath`
> (`src/lib/submit-lead.ts`). Tanpa didaftarkan, submission akan ditolak `400`.

## 3. Contoh payload

```jsonc
// Home / Quotes (self-check)
{ "path": "home", "name": "Bob", "email": "bob@co.com",
  "source": "hero_selfcheck", "qualifier": "google" }

// Team B (email saja)
{ "path": "teamb", "email": "sam@co.com", "source": "hero" }
```

Respons sukses: `{ "success": true, "id": 12 }`.

## 4. Membuat form baru & menyambungkannya

### Langkah 1 — pakai helper `submitLead`

```tsx
"use client";

import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/submit-lead";

export function MyForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
    setError(null);
    try {
      await submitLead({
        path: "quotes",                       // home | quotes | teamb
        email: String(fd.get("email") || ""), // wajib
        name: String(fd.get("name") || ""),   // opsional
        source: "my_new_form",                // opsional, penanda form ini
      });
      setSent(true);
    } catch {
      setError("Gagal mengirim. Coba lagi atau email info@remohires.com.");
    } finally {
      setSending(false);
    }
  }

  if (sent) return <p>Terima kasih — kami akan menghubungi Anda.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nama" />
      <input name="email" type="email" placeholder="Email kerja" required />
      <button type="submit" disabled={sending}>
        {sending ? "Mengirim…" : "Kirim"}
      </button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
```

### Langkah 2 — pasang di halaman

```tsx
import { MyForm } from "@/components/.../my-form";
// ...
<MyForm />
```

### Langkah 3 — pastikan CORS

Origin landing page harus terdaftar di backend (`CORS_ORIGIN` pada `.env`
backend), mis. `https://remohires.com,http://localhost:3000`.

## 5. Form yang sudah tersambung

| Komponen                              | Tujuan     | Field dikirim                          |
|---------------------------------------|------------|----------------------------------------|
| `components/hvac/lead-form.tsx`       | backend (`home`/`quotes`) | name, email, source, qualifier |
| `components/hvac/self-check.tsx`      | backend (`home`/`quotes`) | (meneruskan ke lead-form)      |
| `components/teamb/lead-form.tsx`      | backend (`teamb`) | email, source                   |
| `components/aitalent/match-form.tsx`  | **web3forms** (form lama) | name, email, industry, message, subject |

## 6. Melihat data lead

Buka dashboard admin backend: **https://frm-v1.remohires.com/admin**
(login sesuai `ADMIN_USER` / `ADMIN_PASSWORD`). Data dipisah per section
mengikuti `path`, plus halaman **Overview** untuk ringkasan + submission terbaru,
dan tombol **Export CSV** per section.
