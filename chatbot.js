const productData = [
    { name: "Áo thun", colors: ["Đỏ", "Xanh", "Trắng"], sizes: ["S", "M", "L"], price: 200000 },
    { name: "Quần jean", colors: ["Đen", "Xanh"], sizes: ["M", "L", "XL"], price: 350000 }
];

function getChatResponse(input) {
    const lowerInput = input.toLowerCase();
    for (let product of productData) {
        if (lowerInput.includes(product.name.toLowerCase())) {
            let response = `Sản phẩm: ${product.name}\n`;
            response += `Màu sắc: ${product.colors.join(", ")}\n`;
            response += `Size: ${product.sizes.join(", ")}\n`;
            response += `Giá: ${product.price} VND`;
            return response;
        }
    }
    return "Xin lỗi, tôi không tìm thấy sản phẩm bạn cần.";
}

document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const response = getChatResponse(userInput);
    const messages = document.getElementById('messages');
    messages.innerHTML += `<p><strong>Bạn:</strong> ${userInput}</p>`;
    messages.innerHTML += `<p><strong>Chatbot:</strong> ${response}</p>`;
    document.getElementById('user-input').value = '';
});
