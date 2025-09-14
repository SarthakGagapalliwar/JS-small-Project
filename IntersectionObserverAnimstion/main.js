
// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.1, 
  rootMargin: '0px 0px -50px 0px' 
});

// Observe the element with id 'my-work'
const targetElement = document.querySelectorAll('#my-work img');

targetElement.forEach(img=>observer.observe(img));

// we can you this when want more element on last items visiable or comes


