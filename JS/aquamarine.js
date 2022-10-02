const sections = document.querySelectorAll('.row');

window.addEventListener('scroll', animateSections);

animateSections();


function animateSections() {
    const triggerBottom = window.innerHeight / 5 * 5.5

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top

        if (sectionTop < triggerBottom) {
            section.classList.add('show')
        } else {
            section.classList.remove('show');
        }
    })
}