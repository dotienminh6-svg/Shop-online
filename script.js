function filterProducts(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block'; // Hiển thị
        } else {
            card.style.display = 'none'; // Ẩn đi
        }
    });
}
