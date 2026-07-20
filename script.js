// Lấy các phần tử từ HTML
const toggleBtn = document.getElementById('toggleBtn');
const socialLinks = document.getElementById('socialLinks');

// Thêm sự kiện click cho nút bấm
toggleBtn.addEventListener('click', () => {
    if (socialLinks.style.display === 'flex') {
        // Nếu đang hiện thì ẩn đi
        socialLinks.style.display = 'none';
        toggleBtn.textContent = 'Xem thông tin liên hệ';
    } else {
        // Nếu đang ẩn thì hiện lên
        socialLinks.style.display = 'flex';
        toggleBtn.textContent = 'Ẩn thông tin';
    }
});