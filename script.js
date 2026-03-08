function order(productName) {
    const myPhone = "0782059679"; // QUAN TRỌNG: Thay số điện thoại Zalo của bạn vào đây
    const text = `Chào bạn, mình muốn đặt mua: ${productName}. Tư vấn cho mình nhé!`;
    const encodedText = encodeURIComponent(text);
    
    // Mở ứng dụng Zalo
    window.open(`https://zalo.me/${myPhone}?text=${encodedText}`, '_blank');
}