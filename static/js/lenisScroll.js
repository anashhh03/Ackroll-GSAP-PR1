const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// scroll to top

// Function to scroll to top
function scrollToTop() {
    lenis.scrollTo(0, { duration: 0.8 }); // Scroll to top with duration in seconds
}

// Add event listener to the button
document.getElementById('scrollTopBtn').addEventListener('click', scrollToTop);

// Optional: Update Lenis on scroll
function update(time) {
    lenis.raf(time);
    requestAnimationFrame(update);
}

requestAnimationFrame(update);