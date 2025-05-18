import { useState } from "react";

export default function License() {
  const [lang, setLang] = useState("en");

  const LanguageToggle = () => (
    <div className="text-center mb-4">
      <button onClick={() => setLang("en")} className="btn btn-sm btn-outline-info mx-1">
        🇺🇸 English
      </button>
      <button onClick={() => setLang("id")} className="btn btn-sm btn-outline-info mx-1">
        🇮🇩 Indonesian
      </button>
      <button onClick={() => setLang("ja")} className="btn btn-sm btn-outline-info mx-1">
        🇯🇵 Japanese
      </button>
    </div>
  );

  return (
    <main className="container py-5 text-light">
      <header className="text-center mb-4" style={{ borderBottom: "2px solid #00fff7", paddingBottom: "2rem" }}>
        <h1 style={{ fontFamily: "Orbitron", color: "#00fff7" }}>📄 License & Usage Terms</h1>
        <p className="lead">Guidelines for using Singularity Pulse content and resources.</p>
      </header>

      <LanguageToggle />

      {lang === "en" && (
        <>
          <section className="mb-5">
            <h4 style={{ color: "#ff66c4" }}>✅ What You’re Allowed To Do</h4>
            <ul>
              <li>Create <strong>non-commercial fan content</strong> (e.g., AMVs, remixes, art)</li>
              <li>Use logos, overlays, and voice clips for <strong>personal or educational use</strong></li>
              <li>Share fan creations with credit</li>
              <li>Translate light novel chapters (with source credit)</li>
            </ul>
          </section>
          <section className="mb-5">
            <h4 style={{ color: "#ff4f79" }}>🚫 What You’re NOT Allowed To Do</h4>
            <ul>
              <li>Sell or monetize Singularity Pulse content without permission</li>
              <li>Reupload voice clips or music without added creative use</li>
              <li>Claim the IP, characters, or logos as your original work</li>
              <li>Use content in hate speech, NSFW, or misleading content</li>
            </ul>
          </section>
          <section className="mb-5">
            <h4 style={{ color: "#8a2be2" }}>⚠️ AI-Generated Material Notes</h4>
            <p>
              This project uses tools like <strong>Suno AI</strong> and <strong>ChatGPT</strong> to generate songs, stories, and character designs.
              All content is curated and published by <strong>Senriki Sorani</strong>.
            </p>
            <p>
              You may not claim AI-generated works as your own — especially for commercial use.
            </p>
          </section>
          <section className="mb-5">
            <h4 style={{ color: "#00fff7" }}>📬 Collaborations or Inquiries</h4>
            <p>For commercial use or official collaboration, contact me via the <a href="/about" className="link-info">About</a> page.</p>
          </section>
        </>
      )}

      {lang === "id" && (
        <>
          <section className="mb-5">
            <h4 style={{ color: "#ff66c4" }}>✅ Yang Diizinkan</h4>
            <ul>
              <li>Membuat <strong>konten penggemar non-komersial</strong> (seperti AMV, remix, seni)</li>
              <li>Menggunakan aset untuk <strong>penggunaan pribadi atau edukatif</strong></li>
              <li>Berbagi karya dengan menyertakan kredit</li>
              <li>Menerjemahkan cerita dengan mencantumkan sumber</li>
            </ul>
          </section>
          <section className="mb-5">
            <h4 style={{ color: "#ff4f79" }}>🚫 Yang Dilarang</h4>
            <ul>
              <li>Menjual atau memonetisasi aset tanpa izin</li>
              <li>Reupload suara atau musik tanpa penambahan kreativitas</li>
              <li>Mengklaim karakter atau cerita sebagai milik pribadi</li>
              <li>Penggunaan untuk ujaran kebencian, NSFW, atau penipuan</li>
            </ul>
          </section>
          <section className="mb-5">
            <h4 style={{ color: "#8a2be2" }}>⚠️ Tentang Konten AI</h4>
            <p>
              Proyek ini menggunakan <strong>Suno AI</strong> dan <strong>ChatGPT</strong> untuk membuat lagu, cerita, dan karakter.
              Semua konten dikurasi dan diterbitkan oleh <strong>Senriki Sorani</strong>.
            </p>
            <p>Konten AI ini tidak boleh diklaim sebagai milik pribadi, terutama untuk keperluan komersial.</p>
          </section>
          <section className="mb-5">
            <h4 style={{ color: "#00fff7" }}>📬 Kolaborasi atau Pertanyaan</h4>
            <p>Untuk kolaborasi atau penggunaan resmi, silakan hubungi melalui halaman <a href="/about" className="link-info">Tentang</a>.</p>
          </section>
        </>
      )}

      {lang === "ja" && (
        <>
          <section className="mb-5">
            <h4 style={{ color: "#ff66c4" }}>✅ 許可されていること</h4>
            <ul>
              <li><strong>非商用ファン作品</strong>の作成（AMV、リミックス、イラストなど）</li>
              <li>個人または教育目的での利用</li>
              <li>適切なクレジットを付けたファン作品の共有</li>
              <li>出典元を明記したライトノベルの翻訳</li>
            </ul>
          </section>
          <section className="mb-5">
            <h4 style={{ color: "#ff4f79" }}>🚫 禁止されていること</h4>
            <ul>
              <li>許可なく商用利用・販売</li>
              <li>編集せずに音声や楽曲を再アップロード</li>
              <li>キャラクターやストーリーを自作と偽ること</li>
              <li>ヘイト、NSFW、誤解を招く目的での利用</li>
            </ul>
          </section>
          <section className="mb-5">
            <h4 style={{ color: "#8a2be2" }}>⚠️ AIコンテンツについて</h4>
            <p>
              <strong>Suno AI</strong> や <strong>ChatGPT</strong> による生成コンテンツは
              <strong>Senriki Sorani</strong> により編集・公開されています。
            </p>
            <p>商業目的での無断使用は禁止されています。</p>
          </section>
          <section className="mb-5">
            <h4 style={{ color: "#00fff7" }}>📬 コラボやご相談</h4>
            <p><a href="/about" className="link-info">About</a> ページよりご連絡ください。</p>
          </section>
        </>
      )}
    </main>
  );
}
