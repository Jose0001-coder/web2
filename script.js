const slider = document.querySelector('.slider');

// Detener animación al pasar el mouse
slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
});

// Reanudar animación al salir del mouse
slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
});

const aboutImg = document.querySelector('.about-img');
const slides = document.querySelectorAll('.about-img img');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');
const indicators = document.createElement('div');

// Crear botones de navegación
prevBtn.textContent = '❮';
nextBtn.textContent = '❯';
prevBtn.className = 'prev';
nextBtn.className = 'next';
document.querySelector('#about').appendChild(prevBtn);
document.querySelector('#about').appendChild(nextBtn);

// Crear indicadores
indicators.className = 'slider-indicators';
slides.forEach((_, i) => {
    const indicator = document.createElement('span');
    if (i === 0) indicator.classList.add('active');
    indicator.dataset.index = i;
    indicators.appendChild(indicator);
});
document.querySelector('#about').appendChild(indicators);

// Variables
let currentIndex = 0;

// Función para mostrar la slide
function showSlide(index) {
    if (index < 0) currentIndex = slides.length - 1;
    else if (index >= slides.length) currentIndex = 0;
    else currentIndex = index;

    aboutImg.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

// Función para actualizar los indicadores
function updateIndicators() {
    document.querySelectorAll('.slider-indicators span').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Event listeners para los botones
prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

// Event listeners para los indicadores
document.querySelectorAll('.slider-indicators span').forEach(dot => {
    dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.index, 10)));
});