let cartCount = 0; // Biến để lưu số lượng sản phẩm trong giỏ hàng
let cartTotal = 0; // Biến để lưu tổng giá trị giỏ hàng
let deliveryAddress = ""; // Biến để lưu địa chỉ giao hàng

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

// Thêm sự kiện cho nút thanh toán
document.getElementById('checkout').addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

    if (deliveryAddress === "") { // Kiểm tra nếu chưa có địa chỉ giao hàng
        document.getElementById('registration-form').style.display = 'block'; // Hiện form đăng ký
        return; // Dừng thực hiện nếu chưa có địa chỉ
    }

    // Tạo hóa đơn và hiển thị
    const invoice = `Số sản phẩm: ${cartCount}, Tổng tiền: ${cartTotal.toLocaleString()} VNĐ, Địa chỉ giao hàng: ${deliveryAddress}`;
    document.getElementById('invoice').innerText = invoice; // Cập nhật hóa đơn hiển thị
    document.getElementById('thank-you-message').style.display = 'block'; // Hiện thông báo cảm ơn

    // Cuộn xuống phần thông báo cảm ơn
    document.getElementById('thank-you-message').scrollIntoView({ behavior: 'smooth' });
});

// Thêm sự kiện cho nút gửi địa chỉ
document.getElementById('submit-address').addEventListener('click', () => {
    const username = document.getElementById('username').value; // Lấy tên người dùng từ ô nhập
    const address = document.getElementById('address').value; // Lấy địa chỉ từ ô nhập

    if (username && address) { // Kiểm tra nếu đã điền đầy đủ thông tin
        deliveryAddress = `${username}, ${address}`; // Lưu địa chỉ
        alert('Thông tin địa chỉ đã được lưu.'); // Thông báo khi lưu thành công
        document.getElementById('registration-form').style.display = 'none'; // Ẩn form đăng ký
    } else {
        alert('Vui lòng điền đầy đủ thông tin.'); // Thông báo nếu thông tin chưa đầy đủ
    }
});