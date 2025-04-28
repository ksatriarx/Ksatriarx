const movies = [
  {
    "title": "Last Breath (2025)",
    "genre": "Thriller, Mystery",
    "rating": "★ 6.8",
    "year": "2025",
    "duration": "115min",
    "type": "Movie",
    "description": "Seorang penyelam yang terjebak di dasar laut tanpa oksigen harus berjuang untuk bertahan hidup melawan waktu dan ketakutan terbesar dalam hidupnya.",
    "trailer": "https://files.catbox.moe/3laeli.mp4",
    "video": "https://cdn1.turboviplay.com/data1/6809d3b125bc5/6809d3b125bc5.m3u8",
    "poster": "https://i.postimg.cc/pTPkG1sJ/MV5-BYm-Nj-MDg1-Y2-Et-Nm-Zi-OS00-NGUz-LThj-ZGYt-Nz-U2-OGI5-M2-Vk-MDFh-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
  },
  {
    "title": "Freaky Tales (2025)",
    "genre": "Horror, Thriller",
    "rating": "★ 6.8",
    "year": "2025",
    "duration": "110min",
    "type": "Movie",
    "description": "Sekelompok teman menghadapi kejadian mengerikan ketika mereka menemukan buku kuno yang membawa mereka ke dalam dunia kegelapan yang tak terbayangkan.",
    "trailer": "https://files.catbox.moe/cb40vj.mp4",
    "video": "https://cdn1.turboviplay.com/data1/680daaf4d57d1/680daaf4d57d1.m3u8",
    "poster": "https://i.postimg.cc/BvbnTq0T/MV5-BMTUx-Nzk2-Nj-At-NGY2-My00-ZTVj-LTkx-YTQt-MWUz-ODUw-Nz-M3-NDhk-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
  },
  {
    "title": "Havoc (2025)",
    "genre": "Action, Thriller",
    "rating": "★ 7.5",
    "year": "2025",
    "duration": "135min",
    "type": "Movie",
    "description": "Seorang detektif yang sedang terjerat dalam dunia kriminal harus mengungkap rahasia besar sambil berjuang untuk menyelamatkan keluarganya.",
    "trailer": "https://files.catbox.moe/35wfot.mp4",
    "video": "https://cdn1.turboviplay.com/data1/680c38c55bebc/680c38c55bebc.m3u8",
    "poster": "https://i.postimg.cc/LXqhpmQ9/ems-c-HJk-LWVtcy1hc3-Nld-HMvb-W92a-WVz-Lz-Jl-NTkw-NTIx-LTM0-Ym-Yt-NDgz-Ni1h-ZGFl-LThj-ODM2-ZTA5-OTEz-Mi5qc-Gc-1.jpg"
  },
  {
    "title": "Weak Hero Class 2 (2025)",
    "genre": "Action, Drama",
    "rating": "★ 9.2",
    "year": "2025",
    "duration": "8 eps",
    "type": "Series",
    "description": "Yeon Si Eun kembali menghadapi tantangan baru di dunia sekolah keras yang brutal.",
    "trailer": "https://files.catbox.moe/8g9571.mp4",
    "poster": "https://i.postimg.cc/xCfzyRRj/images.jpg",
    "Eps": [
      "https://cdn.turboviplay.com/data1/680b770dbbeef/680b770dbbeef.m3u8",
      "https://cdn.turboviplay.com/data1/680b7ce80bae4/680b7ce80bae4.m3u8",
      "https://cdn.turboviplay.com/data1/680b819204fa4/680b819204fa4.m3u8",
      "https://cdn.turboviplay.com/data1/680b864694917/680b864694917.m3u8",
      "https://cdn.turboviplay.com/data1/680b89c93ec8d/680b89c93ec8d.m3u8",
      "https://cdn.turboviplay.com/data1/680b8e78c1ea4/680b8e78c1ea4.m3u8",
      "https://cdn.turboviplay.com/data1/680b932732ad4/680b932732ad4.m3u8",
      "https://cdn.turboviplay.com/data1/680b9a58a7748/680b9a58a7748.m3u8"
    ]
  },
  {
    "title": "Locked (2025)",
    "genre": "Thriller",
    "rating": "★ 8.9",
    "year": "2025",
    "duration": "120min",
    "type": "Movie",
    "description": "Seorang pencuri masuk ke SUV mewah dan menemukan dirinya dalam permainan psikologis horor.",
    "trailer": "https://files.catbox.moe/xthmdm.mp4",
    "video": "https://cdn1.turboviplay.com/data1/680943909ce01/680943909ce01.m3u8",
    "poster": "https://i.postimg.cc/d31ZHggd/MV5-BNGI1-Zj-Iy-Zm-Yt-OGUz-YS00-Nzg3-LTk1-MTIt-Yz-Yx-OTcx-MTEy-OTc1-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
  },
  {
    "title": "A Working Man (2025)",
    "genre": "Drama",
    "rating": "★ 7.8",
    "year": "2025",
    "duration": "110min",
    "type": "Movie",
    "description": "Seorang ayah bekerja keras menghadapi tantangan hidup demi keluarganya.",
    "trailer": "https://files.catbox.moe/cqyhoh.mp4",
    "video": "https://cdn1.turboviplay.com/data1/68094abf5703a/68094abf5703a.m3u8",
    "poster": "https://i.postimg.cc/02X0s0fP/MV5-BYm-Qx-ZGIx-NTYt-YTQw-My00-ODdk-LWI0-Mm-Qt-M2-E0-Zm-Iy-Nm-Yz-MGMz-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg"
  }
];

const modal = document.getElementById("video-modal");
const modalVideo = document.getElementById("modal-video");
const playButton = document.getElementById("play-btn");
const introVideo = document.getElementById("intro-video");
const overlay = document.getElementById("poster-overlay");
const genreEl = document.getElementById("genre");
const titleEl = document.getElementById("film-title");
const metaEl = document.getElementById("meta-info");
const descEl = document.getElementById("film-desc");

let currentFilm = movies[0];
let isFullscreen = false; // Flag untuk mengetahui apakah fullscreen aktif
let isMainVideoPlaying = false; // Flag untuk mengetahui apakah video utama sedang diputar

// Fungsi untuk load film
function loadFilm(film) {
  overlay.style.backgroundImage = `url('${film.poster}')`;
  overlay.style.opacity = 1;
  introVideo.pause();
  introVideo.src = film.trailer;
  introVideo.load();
  introVideo.oncanplay = () => {
    overlay.style.opacity = 0;
    introVideo.play();
    introVideo.muted = false;
  };

  genreEl.textContent = film.genre;
  titleEl.textContent = film.title;
  metaEl.textContent = `${film.rating} · ${film.year} · ${film.duration} · ${film.type}`;
  descEl.textContent = film.description;

  const EpButtons = document.getElementById("Ep-buttons");
  EpButtons.innerHTML = ''; // Kosongkan sebelumnya
  if (film.Eps && film.Eps.length > 0) {
    film.Eps.forEach((Ep, index) => {
      const button = document.createElement('button');
      button.innerText = `Ep ${index + 1}`;
      button.onclick = () => {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(Ep);
          hls.attachMedia(modalVideo);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            modal.style.display = "flex"; // Modal tetap terbuka
            modalVideo.play();
            requestFullscreen(modalVideo); // Meminta fullscreen untuk video
            introVideo.pause();  // Pause video intro saat video utama diputar
            isMainVideoPlaying = true; // Tandai bahwa video utama sedang diputar
          });
        } else if (modalVideo.canPlayType('application/vnd.apple.mpegurl')) {
          modalVideo.src = Ep;
          modal.style.display = "flex"; // Modal tetap terbuka
          modalVideo.play();
          requestFullscreen(modalVideo); // Meminta fullscreen untuk video
          introVideo.pause();  // Pause video intro saat video utama diputar
          isMainVideoPlaying = true; // Tandai bahwa video utama sedang diputar
        } else {
          alert("Browser kamu tidak mendukung pemutaran .m3u8");
        }
      };
      EpButtons.appendChild(button);
    });
  }

  currentFilm = film;
}

// Load film default
loadFilm(currentFilm);

// Populate movie grid
const movieGrid = document.getElementById("movie-grid");
movies.forEach((movie) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <div class="grid-title">${movie.title}</div>
  `;
  div.onclick = () => loadFilm(movie);
  movieGrid.appendChild(div);
});

// Tombol play function
playButton.onclick = () => {
  if (currentFilm.type === "Movie") {
    // Jika jenisnya movie, mainkan video full
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(currentFilm.video);
      hls.attachMedia(modalVideo);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        modal.style.display = "flex"; // Modal tetap terbuka
        modalVideo.play();
        requestFullscreen(modalVideo); // Meminta fullscreen untuk video
        introVideo.pause();  // Pause video intro saat video utama diputar
        isMainVideoPlaying = true; // Tandai bahwa video utama sedang diputar
      });
    } else if (modalVideo.canPlayType('application/vnd.apple.mpegurl')) {
      modalVideo.src = currentFilm.video;
      modal.style.display = "flex"; // Modal tetap terbuka
      modalVideo.play();
      requestFullscreen(modalVideo); // Meminta fullscreen untuk video
      introVideo.pause();  // Pause video intro saat video utama diputar
      isMainVideoPlaying = true; // Tandai bahwa video utama sedang diputar
    } else {
      alert("Browser kamu tidak mendukung pemutaran .m3u8");
    }
  } else {
    // Jika jenisnya series, mainkan episode pertama
    if (currentFilm.Eps && currentFilm.Eps.length > 0) {
      const firstEpisode = currentFilm.Eps[0];
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(firstEpisode);
        hls.attachMedia(modalVideo);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          modal.style.display = "flex"; // Modal tetap terbuka
          modalVideo.play();
          requestFullscreen(modalVideo); // Meminta fullscreen untuk video
          isMainVideoPlaying = true; // Tandai bahwa video utama sedang diputar
        });
      } else if (modalVideo.canPlayType('application/vnd.apple.mpegurl')) {
        modalVideo.src = firstEpisode;
        modal.style.display = "flex"; // Modal tetap terbuka
        modalVideo.play();
        requestFullscreen(modalVideo); // Meminta fullscreen untuk video
        isMainVideoPlaying = true; // Tandai bahwa video utama sedang diputar
      } else {
        alert("Browser kamu tidak mendukung pemutaran .m3u8");
      }
    }
  }
};

// Fungsi untuk request fullscreen
function requestFullscreen(el) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }

  isFullscreen = true; // Menandakan bahwa fullscreen aktif
  history.pushState({fullscreen: true}, '', '#fullscreen');
}

// Tombol close modal
const closeModalButton = document.getElementById("close-modal-btn");

closeModalButton.onclick = function () {
  // Menghentikan video dan keluar dari fullscreen
  if (document.fullscreenElement) {
    document.exitFullscreen();
    isFullscreen = false; // Reset flag fullscreen
  }

  // Menutup modal
  modal.style.display = "none"; // Menyembunyikan modal
  modalVideo.src = ''; // Menghentikan video
  introVideo.play(); // Memutar kembali intro video
  isMainVideoPlaying = false; // Reset flag video utama

  // Mengembalikan URL ke tampilan home
  history.pushState({}, '', '/home');
};

// Menangani penutupan modal saat tombol back atau navigasi
window.onpopstate = function (event) {
  // Jika fullscreen aktif, keluar dari fullscreen dan sembunyikan modal
  if (document.fullscreenElement) {
    document.exitFullscreen();
    isFullscreen = false; // Reset flag fullscreen
  }

  // Menyembunyikan modal dan overlay
  overlay.style.opacity = 1;
  modal.style.display = 'none';
  modalVideo.src = ''; // Menghentikan video
  introVideo.play(); // Memutar kembali intro video
  isMainVideoPlaying = false; // Reset flag video utama
};