const filterButtons = document.querySelectorAll('.filter-option');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        if (filter === 'all') {
            galleryItems.forEach(item => {
                item.style.display = 'block';
            });
        } else {
            galleryItems.forEach(item => {
                if (item.getAttribute('data-section') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
});

const galleryImages = document.querySelectorAll('.gallery-image');
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

galleryImages.forEach(imageContainer => {
    imageContainer.addEventListener('click', () => {
        const imgElement = imageContainer.querySelector('img');
        if (imgElement) {
            openZoomModal(imgElement.src, imgElement.alt);
        }
    });
});