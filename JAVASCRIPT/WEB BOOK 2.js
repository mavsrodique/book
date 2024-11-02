// Function to filter books based on category
function filterBooks(category) {
    const images = document.querySelectorAll('.image');
    images.forEach((image) => {
        const imgCategory = image.getAttribute('data-category');
        if (category === 'all' || imgCategory === category) {
            image.style.display = 'block'; // Show image
        } else {
            image.style.display = 'none'; // Hide image
        }
    });
}

// Function to search for books
function searchBooks() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const images = document.querySelectorAll('.image');
    images.forEach((image) => {
        const imgAlt = image.querySelector('img').alt.toLowerCase();
        if (imgAlt.includes(input)) {
            image.style.display = 'block'; // Show image
        } else {
            image.style.display = 'none'; // Hide image
        }
    });
}

// Function to open the modal
function openModal(imageElement) {
    const modal = document.getElementById('image-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    modalTitle.textContent = imageElement.alt;
    modalDescription.textContent = imageElement.getAttribute('data-description');
    modal.style.display = 'block'; // Show modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none'; // Hide modal
}

// Event listeners for images to open modal
document.querySelectorAll('.image img').forEach((img) => {
    img.addEventListener('click', () => openModal(img));
});

// Event listener for close button
document.getElementById('close-modal').addEventListener('click', closeModal);

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        closeModal();
    }
});
