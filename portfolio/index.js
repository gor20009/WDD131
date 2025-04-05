const filterButtons = document.querySelectorAll('.filter-option');
const sections = document.querySelectorAll('[data-section]');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        filterButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');

        if (filter === 'all') {
            sections.forEach(section => {
                section.classList.remove('hidden');
            });
        } else {
            sections.forEach(section => {
                if (section.getAttribute('data-section') === filter) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        }
    });
});

const resumeImage = document.getElementById('resumeImage');
const profileImage = document.getElementById('profileImage');
const zoomModal = document.getElementById('zoomModal');
const zoomImage = document.getElementById('zoomImage');
const closeBtn = document.querySelector('.close-btn');

function openZoomModal(imageSrc, altText) {
    zoomImage.innerHTML = `<img src="${imageSrc}" alt="${altText}" />`;
    zoomModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

closeBtn.addEventListener('click', () => {
    zoomModal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
});

zoomModal.addEventListener('click', (e) => {
    if (e.target === zoomModal) {
        zoomModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

resumeImage.addEventListener('click', () => {
    const resumeImgElement = resumeImage.querySelector('img');
    openZoomModal(resumeImgElement.src, resumeImgElement.alt);
});

profileImage.addEventListener('click', () => {
    const profileImgElement = profileImage.querySelector('img');
    openZoomModal(profileImgElement.src, profileImgElement.alt);
});