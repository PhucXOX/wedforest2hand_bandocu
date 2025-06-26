let cartCount = 0; // Biến để lưu số lượng sản phẩm trong giỏ hàng
let cartTotal = 0; // Biến để lưu tổng giá trị giỏ hàng

// Thêm sự kiện cho tất cả các nút "Thêm vào giỏ hàng"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement; // Lấy phần tử sản phẩm cha
        const price = parseInt(product.getAttribute('data-price').replace('.', '')); // Lấy giá trị từ thuộc tính data-price và chuyển đổi sang số nguyên
        cartCount++; // Tăng số lượng sản phẩm
        cartTotal += price; // Cộng dồn tổng giá trị giỏ hàng
        document.getElementById('cart-count').innerText = cartCount; // Cập nhật số lượng sản phẩm hiển thị
        document.getElementById('cart-total').innerText = `Tổng tiền: ${cartTotal.toLocaleString()} VNĐ`; // Cập nhật tổng tiền hiển thị
        alert('Sản phẩm đã được thêm vào giỏ hàng!'); // Thông báo khi sản phẩm được thêm
    });
});

// Hiển thị thông tin giao hàng
const recipientName = localStorage.getItem('recipientName');
const phone = localStorage.getItem('phone');
const deliveryAddress = localStorage.getItem('deliveryAddress');

document.getElementById('recipient-info').innerText = `Tên: ${recipientName}, Số điện thoại: ${phone}, Địa chỉ: ${deliveryAddress}`;

// Thêm sự kiện cho nút thanh toán
document.getElementById('checkout').addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

    const invoice = `Tên người nhận: ${recipientName}, Số điện thoại: ${phone}, Số sản phẩm: ${cartCount}, Tổng tiền: ${cartTotal.toLocaleString()} VNĐ, Địa chỉ giao hàng: ${deliveryAddress}`;
    document.getElementById('invoice').innerText = invoice; // Cập nhật hóa đơn hiển thị
    document.getElementById('thank-you-message').style.display = 'block'; // Hiện thông báo cảm ơn

    // Cuộn xuống phần thông báo cảm ơn
    document.getElementById('thank-you-message').scrollIntoView({ behavior: 'smooth' });
});

// Thêm sự kiện cho nút thay đổi địa chỉ
document.getElementById('change-address').addEventListener('click', () => {
    const newAddress = prompt("Nhập địa chỉ mới:", deliveryAddress);
    if (newAddress) {
        localStorage.setItem('deliveryAddress', newAddress); // Cập nhật địa chỉ mới
        document.getElementById('recipient-info').innerText = `Tên: ${recipientName}, Số điện thoại: ${phone}, Địa chỉ: ${newAddress}`;
    }
});