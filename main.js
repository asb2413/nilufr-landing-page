


const imgUrlsArr = [
  { img: "src/Asset 6.png", text: "نشاء قائمة جهات اتصال العملاء والموردين لاستخدامها في أي فواتير لاحقًا." },
  { img: "src/Asset 6.png", text: "نشاء قائمة جهات اتصال العملاء والموردين لاستخدامها في أي فواتير لاحقًا.." },
  { img: "src/Asset 6.png", text: "نشاء قائمة جهات اتصال العملاء والموردين لاستخدامها في أي فواتير لاحقًا.." }
];

const articleContainer = document.getElementById("article-container");
const newsText = document.getElementById("news-text");

let imgIndex = 0;

function updateSlider() {
  articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex].img}" class="image" />`;
  newsText.textContent = imgUrlsArr[imgIndex].text;
}

// Initialize the first slide
updateSlider();

function previousImg() {
  imgIndex = (imgIndex - 1 + imgUrlsArr.length) % imgUrlsArr.length;
  updateSlider();
}

function nextImg() {
  imgIndex = (imgIndex + 1) % imgUrlsArr.length;
  updateSlider();
}



// JavaScript to add scroll effect and toggle mobile navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const navbarToggler = document.getElementById('navbar-toggler');
const navbarLinks = document.getElementById('navbar-links');

navbarToggler.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
});

// Add active class to the clicked link
const links = document.querySelectorAll('.navbar-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => link.parentElement.classList.remove('active'));
    link.parentElement.classList.add('active');
  });
});
