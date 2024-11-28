function scrollToTop() {}

// Call the scrollToTop function

function indexHero() {
  var tl = gsap.timeline();

  tl.from(".navbar a img", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });

  tl.from(".navbar a div", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease.out",
  });

  tl.from(".navbar .toggle-menu span", {
    x: -75,
    opacity: 0,
    duration: 0.5,
    ease: "ease.out",
  });
  tl.from(".navbar .toggle-menu img", {
    x: 75,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  });

  tl.from(".hero .hero-left-content .hero-left-title", {
    x: 120,
    opacity: 0,
    duration: 0.8,
    ease: "elastic.out",
  });

  tl.from(
    ".hero .hero-left-content .hero-right-overlay .right .right-text",
    {
      x: -140,
      opacity: 0,
      duration: 0.8,
      ease: "ease.out",
    },
    "-=.5"
  );

  tl.from(".hero .hero-left-content .left-info-link", {
    y: 150,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  tl.from(".hero .hero-left-content .hero-right-overlay .social-right-hero a", {
    y: 150,
    opacity: 0,
    duration: 1,
    ease: "elastic.out",
    stagger: 0.5,
  });
}
indexHero();

function ourProducts() {}
ourProducts();

function ourServices() { 

}
ourServices();
