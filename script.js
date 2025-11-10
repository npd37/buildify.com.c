const sections = document.querySelectorAll('.fade-section, .domain-section, .why-choose, .how-it-works');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => { observer.observe(section); });
