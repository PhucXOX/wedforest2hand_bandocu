-- Bảng người dùng
CREATE TABLE NguoiDung (
    ma_nguoi_dung INT PRIMARY KEY IDENTITY(1,1),
    ten_dang_nhap VARCHAR(50) NOT NULL UNIQUE,
    mat_khau VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    ho_ten VARCHAR(100),
    ngay_tao DATETIME DEFAULT GETDATE()
);

-- Bảng sản phẩm
CREATE TABLE SanPham (
    ma_san_pham INT PRIMARY KEY IDENTITY(1,1),
    ten_san_pham VARCHAR(100) NOT NULL,
    gia DECIMAL(10, 2) NOT NULL,
    anh_url TEXT,
    phong_cach VARCHAR(50),
    ngay_tao DATETIME DEFAULT GETDATE()
);

-- Bảng giỏ hàng
CREATE TABLE GioHang (
    ma_gio_hang INT PRIMARY KEY IDENTITY(1,1),
    ma_nguoi_dung INT,
    ngay_tao DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (ma_nguoi_dung) REFERENCES NguoiDung(ma_nguoi_dung) ON DELETE CASCADE
);

-- Bảng chi tiết giỏ hàng
CREATE TABLE ChiTietGioHang (
    ma_chi_tiet INT PRIMARY KEY IDENTITY(1,1),
    ma_gio_hang INT,
    ma_san_pham INT,
    so_luong INT DEFAULT 1,
    FOREIGN KEY (ma_gio_hang) REFERENCES GioHang(ma_gio_hang) ON DELETE CASCADE,
    FOREIGN KEY (ma_san_pham) REFERENCES SanPham(ma_san_pham) ON DELETE CASCADE
);

-- Bảng đơn hàng
CREATE TABLE DonHang (
    ma_don_hang INT PRIMARY KEY IDENTITY(1,1),
    ma_nguoi_dung INT,
    tong_tien DECIMAL(10, 2),
    ngay_tao DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (ma_nguoi_dung) REFERENCES NguoiDung(ma_nguoi_dung) ON DELETE CASCADE
);

-- Bảng chi tiết đơn hàng
CREATE TABLE ChiTietDonHang (
    ma_chi_tiet_don INT PRIMARY KEY IDENTITY(1,1),
    ma_don_hang INT,
    ma_san_pham INT,
    so_luong INT,
    gia DECIMAL(10, 2),
    FOREIGN KEY (ma_don_hang) REFERENCES DonHang(ma_don_hang) ON DELETE CASCADE,
    FOREIGN KEY (ma_san_pham) REFERENCES SanPham(ma_san_pham) ON DELETE CASCADE
);

-- Bảng liên hệ
CREATE TABLE LienHe (
    ma_lien_he INT PRIMARY KEY IDENTITY(1,1),
    ten VARCHAR(100),
    email VARCHAR(100),
    noi_dung TEXT,
    ngay_gui DATETIME DEFAULT GETDATE()
);
