// LÓGICA DO LIGHTBOX (GALERIA AMPLIADA)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.getElementById('close-lightbox');
const prevBtn = document.getElementById('prev-img');
const nextBtn = document.getElementById('next-img');

let currentImgIndex = 0;

// Abrir Lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImgIndex = index;
        showImage(currentImgIndex);
        lightbox.classList.remove('opacity-0', 'pointer-events-none');
    });
});

function showImage(index) {
    const item = galleryItems[index];
    lightboxImg.src = item.src;
    lightboxCaption.innerText = item.alt;
}

// Navegação
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImgIndex = (currentImgIndex + 1) % galleryItems.length;
    showImage(currentImgIndex);
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImgIndex = (currentImgIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentImgIndex);
});

// Fechar ao clicar no X ou fora da imagem
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('opacity-0', 'pointer-events-none');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('opacity-0', 'pointer-events-none');
    }
});

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") lightbox.classList.add('opacity-0', 'pointer-events-none');
});
// MENU MOBILE
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    mobileMenu.classList.toggle('translate-x-0', !isOpen);
    mobileMenu.classList.toggle('translate-x-full', isOpen);
    menuBtn.innerText = isOpen ? '☰' : '✕';
}

menuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// FAQ
document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const icon = trigger.querySelector('span:last-child');
        const isOpen = content.classList.toggle('open');
        icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';

        // Fecha outros
        document.querySelectorAll('.faq-content').forEach(other => {
            if (other !== content) {
                other.classList.remove('open');
                other.previousElementSibling.querySelector('span:last-child').style.transform = 'rotate(0deg)';
            }
        });
    });
});

// SCROLL TOP
const scrollBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        whatsapp.classList.replace('bottom-6', 'bottom-22');
        scrollBtn.classList.replace('opacity-0', 'opacity-100');
        scrollBtn.classList.remove('pointer-events-none');
    } else {
        whatsapp.classList.replace('bottom-22', 'bottom-6');
        scrollBtn.classList.replace('opacity-100', 'opacity-0');
        scrollBtn.classList.add('pointer-events-none');
    }
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));