

document.addEventListener("DOMContentLoaded", function() {
    console.log("ROUSSOS Recruitment site loaded");
    // Add more functionality here as needed
});
// Get the video element
const video = document.getElementById('video-background');

// Add an event listener to play the video when the section comes into view
document.addEventListener('scroll', () => {
  const sectionTop = document.getElementById('video-background-section').offsetTop;
  const sectionHeight = document.getElementById('video-background-section').offsetHeight;
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
    video.play();
  } else {
    video.pause();
  }
});
// script.js

const searchInput = document.getElementById('searchInput');
const suggestionList = document.getElementById('suggestions-list');
const suggestions = ['option1', 'option2', 'option3'];

searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.toLowerCase();
  suggestionList.innerHTML = '';

  if (inputValue.length > 0) {
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(inputValue));
    filteredSuggestions.forEach(suggestion => {
      const listItem = document.createElement('li');
      listItem.textContent = suggestion;
      suggestionList.appendChild(listItem);
    });
  }
});



document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const suggestions = document.querySelector('.suggestions');
    const suggestionsList = document.querySelector('#suggestions-list');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();

        // Show suggestions if input is not empty
        if (query) {
            suggestions.style.display = 'block';
            
            // Filter suggestions
            const items = suggestionsList.querySelectorAll('li');
            items.forEach(function(item) {
                if (item.textContent.toLowerCase().includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        } else {
            suggestions.style.display = 'none';
        }
    });

    // Hide suggestions when clicking outside the input
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.style.display = 'none';
        }
    });
});

//latest jobs

const cardWrap = document.querySelector('.card-wrap');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentCardIndex = 0;
let cardsPerSlide = 3;

nextBtn.addEventListener('click', () => {
  currentCardIndex += cardsPerSlide;
  if (currentCardIndex >= cards.length) {
    currentCardIndex = 0;
  }
  cardWrap.style.transform = `translateX(-${currentCardIndex * 320}px)`;
});

prevBtn.addEventListener('click', () => {
  currentCardIndex -= cardsPerSlide;
  if (currentCardIndex < 0) {
    currentCardIndex = cards.length - cardsPerSlide;
  }
  cardWrap.style.transform = `translateX(-${currentCardIndex * 320}px)`;
});

//testimonal
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === n) {
            slide.classList.add('active');
        }
    });
    currentSlide = n;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

// Set the interval for autoplay (e.g., 3 seconds)
setInterval(nextSlide, 3000);
