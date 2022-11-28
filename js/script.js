if (window.SimpleAnime) {
  new SimpleAnime();  
}

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.header-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

if (window.SimpleAnime) {
  new SimpleAnime();
};

