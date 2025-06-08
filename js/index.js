const title = document.querySelector('.title');
const text = `Hello Alien`.split('');
const subtext = `I have something`.split('');

// Kosongkan isi
title.innerHTML = '';

// Buat pembungkus utama
const mainTextDiv = document.createElement('div');
mainTextDiv.classList.add('main-text');

const subTextDiv = document.createElement('div');
subTextDiv.classList.add('sub-text');

// Tambahkan huruf ke mainTextDiv
text.forEach((char) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.fontSize = '3.5rem';
  mainTextDiv.appendChild(span);
});

// Tambahkan huruf ke subTextDiv
subtext.forEach((char) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.fontSize = '1rem';
  subTextDiv.appendChild(span);
});

// Tambahkan ke title
title.appendChild(mainTextDiv);
title.appendChild(subTextDiv);

// Tambahkan delay animasi
const spans = title.querySelectorAll('span');
spans.forEach((span) => {
  const delay = Math.random() * 3;
  span.style.animation = `typing 1s ease forwards`;
  span.style.opacity = 0;
  span.style.animationDelay = `${delay}s`;
});
