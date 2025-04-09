document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(el) {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

const icons = document.querySelectorAll('.icon');
icons.forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerText = this.className.split('icon-')[1]; // Exemplo: "facebook"
        this.appendChild(tooltip);
    });

    icon.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) tooltip.remove();
    });
});

const modal = document.querySelector('#modal');
const overlay = document.createElement('div'); 
overlay.id = 'overlay';
document.body.appendChild(overlay); 
const modalClose = document.querySelector('#modal-close');
const projectCards = document.querySelectorAll('.project-card');

function openModal(content) {
    modal.querySelector('.modal-content').innerHTML = content; 
    modal.style.display = 'flex'; 
    overlay.style.display = 'block'; 
}

function closeModal() {
    modal.style.display = 'none'; 
    overlay.style.display = 'none'; 
}

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const content = card.innerHTML; 
        openModal(content); 
    });
});

modalClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

