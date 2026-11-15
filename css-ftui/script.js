/* ===== DATA: ubah jadwal cukup di sini ===== */
/* Posisi yang masih dicari (urutan sesuai daftar) */
const OPEN_ROLES = [
  { role: "Dewan Pertimbangan Lembaga", desc: "Badan pengawas dan penasihat tertinggi di tingkat mahasiswa yang mengawasi jalannya organisasi, memastikan kepatuhan AD/ART, serta mengevaluasi kinerja pengurus inti." },
  { role: "Komisi Kaderisasi", desc: "Komisi di bawah DPL yang mengawasi, mengevaluasi, dan merumuskan standar sistem kaderisasi serta regenerasi anggota di lingkungan CSS FTUI." },
  { role: "Koordinator Kesekretariatan dan SDM", desc: "Pengurus inti yang mengoordinasikan tata kelola administrasi kesekretariatan organisasi sekaligus memastikan pengembangan potensi sumber daya manusia." },
  { role: "Departemen Akademik dan Profesi", desc: "Departemen yang memfasilitasi peningkatan prestasi akademik, wawasan keprofesian teknologi informasi, pelatihan hard skill, serta persiapan karier mahasiswa." },
  { role: "Biro Pengembangan Sumber Daya Manusia", desc: "Biro yang mengelola rekrutmen fungsionaris, alur kaderisasi internal, penilaian kinerja pengurus, serta program kebersamaan internal organisasi." },
  { role: "Komisi Kemahasiswaan", desc: "Komisi di bawah DPL yang mengawasi pelaksanaan program kerja terkait pelayanan, kesejahteraan, dan pengembangan potensi mahasiswa." },
  { role: "Koordinator Akademik dan Kemasyarakatan", desc: "Pengurus inti yang memimpin dan menyelaraskan departemen serta biro yang berfokus pada riset, kesejahteraan mahasiswa, minat bakat, dan pengabdian sosial." },
  { role: "Biro Penelitian dan Pengembangan", desc: "Biro yang melakukan riset data internal, survei kepuasan dan kebutuhan mahasiswa, serta mengevaluasi efektivitas program kerja organisasi." },
  { role: "Departemen Pengabdian Masyarakat", desc: "Departemen yang merancang program sosial kemasyarakatan, edukasi teknologi untuk publik, serta aksi tanggap lingkungan." },
  { role: "Departemen Advokasi dan Kemahasiswaan", desc: "Departemen yang menampung, menyalurkan, dan mengawal aspirasi mahasiswa terkait kebijakan akademik, fasilitas kampus, maupun kesejahteraan mahasiswa." },
  { role: "Departemen Minat dan Bakat", desc: "Departemen yang mewadahi, menyalurkan, dan mengembangkan potensi non-akademik mahasiswa di bidang olahraga, seni, maupun kompetisi kreatif." },
  { role: "Departemen Kerohanian", desc: "Departemen yang memfasilitasi kegiatan pembinaan keagamaan, peringatan hari besar keagamaan, serta membangun iklim toleransi di lingkungan mahasiswa." },
  { role: "Komisi Audit Keuangan", desc: "Komisi di bawah DPL yang bertugas memeriksa, mengaudit, dan memastikan transparansi serta akuntabilitas laporan arus kas organisasi." },
  { role: "Koordinator Keuangan", desc: "Pengurus inti yang mengatur kebijakan finansial, menyusun Rencana Anggaran Biaya (RAB), mengelola kas utama lembaga, serta mengoordinasikan unit dana." },
  { role: "Biro Kemitraan dan Keuangan", desc: "Biro yang mengelola pembukuan keuangan harian organisasi sekaligus menjalin kerja sama sponsorship dan kemitraan strategis dengan pihak eksternal." },
  { role: "Departemen Kewirausahaan", desc: "Departemen yang menjalankan unit usaha mandiri organisasi (seperti penjualan merchandise atau jasa) guna menambah pemasukan kas dan menumbuhkan jiwa bisnis." },
  { role: "Komisi Organisasi", desc: "Komisi di bawah DPL yang mengawasi tata kelola kelembagaan, peraturan internal, mekanisme persidangan, serta menjaga stabilitas sistem organisasi." },
  { role: "Koordinator Komunikasi dan Informasi", desc: "Pengurus inti yang memimpin strategi komunikasi publik, pengelolaan citra lembaga, publikasi informasi, dan produksi identitas visual organisasi." },
  { role: "Biro Hubungan Masyarakat", desc: "Biro yang berperan sebagai jembatan komunikasi dan relasi resmi antara CSS FTUI dengan organisasi mahasiswa lain, alumni, mitra eksternal, serta publik." },
  { role: "Biro Media Sosial dan Konten", desc: "Biro yang mengelola kanal media sosial resmi CSS FTUI, merencanakan kalender editorial, menyusun copywriting, serta mempublikasikan informasi kegiatan." },
  { role: "Biro Desain Kreatif Visual", desc: "Biro yang bertanggung jawab memproduksi seluruh aset grafis, identitas visual, materi promosi, serta dokumentasi foto dan video CSS FTUI." }
];
const LOGO = "logo.webp";      // kecil, untuk header dan footer
const LOGO_HD = "logo-hd.webp"; // besar, untuk hero
const EVENTS = [
  {d:"16 Nov",    cat:"Rekrutmen", t:"Announcement",      p:"Pengumuman resmi open recruitment."},
  {d:"16–27 Nov", cat:"Rekrutmen", t:"Pendaftaran",        p:"Isi formulir dan kirim berkas."},
  {d:"16–27 Nov", cat:"Rekrutmen", t:"Interview",          p:"Wawancara berjalan bersamaan dengan masa pendaftaran."},
  {d:"29 Nov",    cat:"Rekrutmen", t:"Pengumuman hasil",   p:"Hasil seleksi diumumkan."},
  {d:"01 Des",    cat:"Internal",  t:"First Meeting",      p:"Pertemuan pertama pengurus terpilih."},
  {d:"04 Des",    cat:"Internal",  t:"Sertijab",           p:"Serah terima jabatan."}
];


/* ===== INCLUDES: muat partials/header.html dan footer.html =====
   Butuh server (Live Server / GitHub Pages). Membuka file langsung (file://) tidak bisa fetch. */
async function loadIncludes(){
  const hosts = [...document.querySelectorAll("[data-include]")];
  await Promise.all(hosts.map(async h => {
    try{
      const r = await fetch(h.dataset.include);
      if(!r.ok) throw new Error(r.status);
      h.outerHTML = await r.text();
    }catch(e){
      h.outerHTML = '<p style="padding:20px;color:#E97900">Gagal memuat bagian halaman. Jalankan lewat Live Server.</p>';
    }
  }));
}

/* ===== INIT: semua kode yang butuh header/footer jalan setelah includes siap ===== */
async function init(){
  await loadIncludes();
  document.querySelectorAll("img.lg").forEach(i => i.src = i.classList.contains("hero-logo") ? LOGO_HD : LOGO); // hero pakai versi HD // satu logo dipakai di semua tempat

  /* Baris jadwal dipakai di halaman Kegiatan dan Open Recruitment */
  const rowHTML = (e,i) => `<article class="row rv" style="--d:${(i*.07).toFixed(2)}s" data-cat="${e.cat}"><div class="d">${e.d}</div><div><h3>${e.t}</h3><p>${e.p}</p></div><span class="tag">${e.cat}</span></article>`;
  const rows = document.getElementById("rows");
  rows.innerHTML = EVENTS.map(rowHTML).join("");
  document.getElementById("steps").innerHTML = EVENTS.map(rowHTML).join("");

  /* Filter kegiatan */
  const chips = document.getElementById("chips");
  chips.innerHTML = ["Semua", ...new Set(EVENTS.map(e => e.cat))].map((c,i) => `<button class="chip" data-f="${c}" aria-pressed="${i===0}">${c}</button>`).join("");
  chips.addEventListener("click", ev => {
    const b = ev.target.closest(".chip"); if(!b) return;
    chips.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === b));
    let n = 0;
    rows.querySelectorAll(".row").forEach(r => {
      r.hidden = !(b.dataset.f === "Semua" || r.dataset.cat === b.dataset.f);
      r.classList.remove("rv","in","pop");
      if(!r.hidden){ r.style.setProperty("--d", (n++ * .06).toFixed(2) + "s"); void r.offsetWidth; r.classList.add("pop"); setTimeout(() => r.classList.remove("pop"), 900); }
    });
  });

  /* Marquee: isi diduplikasi agar putarannya mulus (animasi geser 50%) */
  const words = ["CCIT Students Society","Fakultas Teknik UI","Kepengurusan 2026/2027","Talenta digital"];
  const unit = words.map(w => `<span>${w}</span>`).join("");
  document.getElementById("track").innerHTML = unit + unit;

  /* Hamburger */
  const burger = document.getElementById("burger"), menu = document.getElementById("menu");
  const setMenu = o => { menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Tutup menu" : "Buka menu"); };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", e => { if(e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") setMenu(false); });

  /* Daftar posisi + animasi gulir */
  const rolesEl = document.getElementById("roles");
    rolesEl.innerHTML = OPEN_ROLES.map((item, i) => `
      <li class="rv" style="--d:${(i % 2) * 0.1}s">
        <button type="button" class="role-btn" aria-expanded="false" data-role="${item.role}" data-desc="${item.desc}">
          <span class="role-txt">${item.role}</span>
          <span class="role-ico" aria-hidden="true">+</span>
        </button>
      </li>
    `).join("");

    rolesEl.addEventListener("click", e => {
    const btn = e.target.closest(".role-btn");
    if (!btn || btn.dataset.animating) return;

    const isOpen = btn.getAttribute("aria-expanded") === "true";

    // Fungsi pembantu untuk menganimasikan buka/tutup dengan efek dissolve
    const toggleRole = (targetBtn, openState) => {
      if (targetBtn.dataset.animating) return;
      const txt = targetBtn.querySelector(".role-txt");
      targetBtn.dataset.animating = "1";
      targetBtn.classList.add("fading");

      setTimeout(() => {
        targetBtn.setAttribute("aria-expanded", openState);
        txt.textContent = openState ? targetBtn.dataset.desc : targetBtn.dataset.role;
        targetBtn.classList.remove("fading");
        delete targetBtn.dataset.animating;
      }, 220);
    };

    // Jika divisi ini akan dibuka, otomatis tutup divisi lain yang sedang terbuka
    if (!isOpen) {
      rolesEl.querySelectorAll('.role-btn[aria-expanded="true"]').forEach(otherBtn => {
        if (otherBtn !== btn) toggleRole(otherBtn, false);
      });
    }

    // Buka atau tutup divisi yang sedang diklik
    toggleRole(btn, !isOpen);
  });
  
  // IntersectionObserver: tambah kelas "in" saat elemen .rv masuk layar, sekali saja
  const io = new IntersectionObserver(es => es.forEach(e => {
    if(e.isIntersecting){
      const el = e.target, d = parseFloat(getComputedStyle(el).getPropertyValue("--d")) || 0;
      el.classList.add("in"); io.unobserve(el);
      // setelah animasi selesai, lepas .rv supaya transisi hover bawaan elemen aktif lagi
      setTimeout(() => el.classList.remove("rv","in"), (1.1 + d) * 1000);
    }
  }), {threshold:.15, rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll(".rv").forEach(el => io.observe(el));

  /* Router: tampilkan satu halaman sesuai #hash */
  const views = [...document.querySelectorAll(".view")];
  function route(){
    const id = location.hash.slice(1) || "beranda";
    const cur = views.find(v => v.id === id) || views[0];
    views.forEach(v => v.classList.toggle("active", v === cur));
    menu.querySelectorAll("a").forEach(a => a.getAttribute("href") === "#" + cur.id ? a.setAttribute("aria-current","page") : a.removeAttribute("aria-current"));
    window.scrollTo(0,0);
  }
  addEventListener("hashchange", route);
  route();
}
init();
