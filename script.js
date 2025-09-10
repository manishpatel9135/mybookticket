// ================== SLIDER ==================
// ================== SLIDER ==================
let slides = document.querySelectorAll(".slide");
let carousel = document.querySelector(".carousel");
let currentIndex = 0;

function updateCarousel() {
  // sab slides se active hatao
  slides.forEach(slide => slide.classList.remove("active"));

  // current slide ko active banao
  slides[currentIndex].classList.add("active");

  // center align calculation
  let slideWidth = slides[0].offsetWidth + 20; // width + margin
  let offset = -currentIndex * slideWidth + (window.innerWidth / 2 - slides[0].offsetWidth / 2);

  carousel.style.transform = `translateX(${offset}px)`;
}

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// Auto slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 4000);

// Initial load
updateCarousel();

// ================== MOVIE CARD CLICK ==================
const movieCards = document.querySelectorAll('.movie-card');

movieCards.forEach(card => {
  card.addEventListener('click', () => {
    // Movie data collect karo
    const movieData = {
      name: card.dataset.name,
      rating: card.dataset.rating,
      language: card.dataset.language,
      duration: card.dataset.duration,
      genre: card.dataset.genre,
      about: card.dataset.about
    };

    // Data ko localStorage me save karo
    localStorage.setItem("selectedMovie", JSON.stringify(movieData));

    // Movie details page par redirect
    window.location.href = "movie.html";   // ✅ tumhare movie detail page ka naam
  });
});

// ================== SEARCH FUNCTION ==================
function searchMovie() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".movie-card");

  cards.forEach(card => {
    let name = card.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// ================== CITY DROPDOWN ==================
document.getElementById("cityDropdown").addEventListener("change", (e) => {
  let city = e.target.value;
  alert("You selected city: " + city);
  // 🔹 future me filter logic bhi add kar sakte ho
});
