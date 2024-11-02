let currentSlide = { books: 0, manga: 0, comics: 0, history: 0 };

function moveSlide(section, direction) {
    const slideContainer = document.getElementById(section + '-slide');
    const booksCount = slideContainer.children.length;

    currentSlide[section] += direction;

    if (currentSlide[section] < 0) {
        currentSlide[section] = 0;
    } else if (currentSlide[section] >= booksCount) {
        currentSlide[section] = booksCount - 1;
    }

    slideContainer.style.transform = `translateX(-${currentSlide[section] * 30}%)`;
    toggleArrows(section, booksCount);
}

function toggleArrows(section, booksCount) {
    const leftArrow = document.getElementById(`left-arrow-${section}`);
    const rightArrow = document.getElementById(`right-arrow-${section}`);

    leftArrow.disabled = currentSlide[section] === 0;
    rightArrow.disabled = currentSlide[section] === booksCount - 1;
}

function showModal(title, description, link) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-link').href = link;
    document.getElementById('book-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('book-modal').style.display = 'none';
}
function closeModal() {
    document.getElementById('book-modal').style.display = 'none';
}

document.getElementById('book-modal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('book-modal')) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        window.location.href = './Index.html';
    }
    else if (event.key === 'a' || event.key === 'A') {
        window.location.href = './Business.html';
    }
});