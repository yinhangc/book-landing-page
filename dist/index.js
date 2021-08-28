// Navbar Toggle
const navbarToggle = () => {
  const hamburger = document.querySelector('.navbar__btn');
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navToggle.classList.toggle('nav-toggle--cross');
  });
};

// Smooth Scrolling 
const smoothScrolling = () => {
  const scrollTo = (e, linkHref) => {
    e.preventDefault();
    const target = document.querySelector(linkHref).offsetTop - 58;
    window.scroll({
      top: target,
      behavior: "smooth"
    })
  };

  const navBrand = document.querySelector('.navbar__brand');
  navBrand.addEventListener('click', (e) => scrollTo(e, '#home'));
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const linkHref = item.querySelector('.nav-link').attributes.href.textContent;
      scrollTo(e, linkHref);
    })
  })
}

// Scrollspy 
const scrollSpy = () => {
  const sections = document.querySelectorAll('section:not(.form)');
  const navLinks = document.querySelectorAll('.nav-link');
  const obsCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        document.querySelector(`.navbar__list a[href*='${entry.target.id}']`).classList.add('active');
      }
    })
  };

  const observer = new IntersectionObserver(obsCallback, {
    rootMargin: "-50% 0px"
  });
  sections.forEach(sec => observer.observe(sec))
};

window.onload = function () {
  navbarToggle();
  smoothScrolling();
  scrollSpy();
}

