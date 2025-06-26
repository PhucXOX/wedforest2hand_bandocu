// Thêm vào mã đăng nhập
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Lấy thông tin từ Local Storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedRecipientName = localStorage.getItem('recipientName'); // Lấy tên người nhận

    // Kiểm tra thông tin đăng nhập
    if (email === storedEmail && password === storedPassword) {
        alert(`Đăng nhập thành công! Chào ${storedRecipientName}`);
        // Chuyển hướng đến trang cửa hàng
        window.location.href = 'store.html'; // Thay đổi thành trang cửa hàng của bạn
    } else {
        alert('Thông tin đăng nhập không đúng. Vui lòng thử lại.');
    }
});