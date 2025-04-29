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
      title: "Weak Hero Class 2 (2025)",
      genre: "Action, Drama",
      rating: "★ 9.2",
      year: "2025",
      duration: "8 eps",
      type: "Series",
      description: "Yeon Si Eun kembali menghadapi tantangan baru di dunia sekolah keras yang brutal.",
      trailer: "https://files.catbox.moe/8g9571.mp4",
      poster: "https://i.postimg.cc/xCfzyRRj/images.jpg",
      Eps: [
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
      title: "Locked (2025)",
      genre: "Thriller",
      rating: "★ 8.9",
      year: "2025",
      duration: "120min",
      type: "Movie",
      description: "Seorang pencuri masuk ke SUV mewah dan menemukan dirinya dalam permainan psikologis horor.",
      trailer: "https://files.catbox.moe/xthmdm.mp4",
      video: "https://cdn1.turboviplay.com/data1/680943909ce01/680943909ce01.m3u8",
      poster: "https://i.postimg.cc/xjcgfhBZ/MV5-BZjg2-NDFh-ZDEt-Yz-Zl-ZC00-ZTRk-LTg4-NDct-Yj-Iw-NTQx-YWY4-ODFi-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
    },
    {
      title: "A Working Man (2025)",
      genre: "Drama",
      rating: "★ 7.8",
      year: "2025",
      duration: "110min",
      type: "Movie",
      description: "Seorang ayah bekerja keras menghadapi tantangan hidup demi keluarganya.",
      trailer: "https://files.catbox.moe/cqyhoh.mp4",
      video: "https://cdn1.turboviplay.com/data1/68094abf5703a/68094abf5703a.m3u8",
      poster: "https://i.postimg.cc/3JGBpp8C/MV5-BYm-Qx-ZGIx-NTYt-YTQw-My00-ODdk-LWI0-Mm-Qt-M2-E0-Zm-Iy-Nm-Yz-MGMz-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg"
    }
  ];

  // ===== ELEMEN UI ===== //
  const searchInput = document.getElementById("searchInput");
  const genreSelect = document.getElementById("Genreselect");
  const movieGrid = document.getElementById("movie-grid");
  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");
  const playButton = document.getElementById("play-btn");
  const introVideo = document.getElementById("intro-video");
  const overlay = document.getElementById("poster-overlay");
  const genreEl = document.getElementById("genre");
  const titleEl = document.getElementById("film-title");
  const metaEl = document.getElementById("meta-info");
  const descEl = document.getElementById("film-desc");
  const EpButtons = document.getElementById("Ep-buttons");

  let currentFilm = movies[0];

  // ===== FUNGSI UTAMA ===== //
  function renderMovies(moviesToShow) {
    movieGrid.innerHTML = '';
    
    if (moviesToShow.length > 0) {
      moviesToShow.forEach(movie => {
        const div = document.createElement("div");
        div.innerHTML = `
          <img src="${movie.poster}" alt="${movie.title}">
          <div class="grid-title">${movie.title}</div>
        `;
        div.onclick = () => loadFilm(movie);
        movieGrid.appendChild(div);
      });
    } else {
      movieGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #ccc;">Tidak ada film yang sesuai</p>';
    }
  }

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
    
    EpButtons.innerHTML = '';
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
              modal.style.display = "flex";
              modalVideo.play();
              requestFullscreen(modalVideo);
            });
          } else if (modalVideo.canPlayType('application/vnd.apple.mpegurl')) {
            modalVideo.src = Ep;
            modal.style.display = "flex";
            modalVideo.play();
            requestFullscreen(modalVideo);
          } else {
            alert("Browser kamu tidak mendukung pemutaran .m3u8");
          }
        };
        EpButtons.appendChild(button);
      });
    }
    currentFilm = film;
  }

  function applyFilters() {
    const searchTerm = searchInput.value.trim();
    const genre = genreSelect.value;
    
    let filteredMovies = [...movies];
    
    if (searchTerm) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (genre) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.genre.toLowerCase().includes(genre.toLowerCase())
      );
    }
    
    renderMovies(filteredMovies);
  }

  function requestFullscreen(el) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  }

  // ===== EVENT LISTENERS ===== //
  searchInput.addEventListener("input", () => applyFilters());
  genreSelect.addEventListener("change", () => applyFilters());

  playButton.onclick = () => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(currentFilm.video);
      hls.attachMedia(modalVideo);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        modal.style.display = "flex";
        modalVideo.play();
        requestFullscreen(modalVideo);
        introVideo.pause();
      });
    } else if (modalVideo.canPlayType('application/vnd.apple.mpegurl')) {
      modalVideo.src = currentFilm.video;
      modal.style.display = "flex";
      modalVideo.play();
      requestFullscreen(modalVideo);
      introVideo.pause();
    } else {
      alert("Browser kamu tidak mendukung pemutaran .m3u8");
    }
  };

  // ===== INISIALISASI ===== //
  window.addEventListener('DOMContentLoaded', () => {
    renderMovies(movies);
    loadFilm(currentFilm);
  });
