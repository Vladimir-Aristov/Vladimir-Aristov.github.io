window.onload = function() {
    // Инициализация карты Leaflet
    var map = L.map('map', { attributionControl: false }).setView([55.7558, 37.6173], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    const chatContainer = document.getElementById('chat-container');
    const chatIcon = document.getElementById('chat-icon');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    // Функция для переключения видимости чата
    function toggleChat() {
        chatContainer.classList.toggle('hidden');
        chatIcon.classList.toggle('hidden');
    }

    // Открытие чата
    chatIcon.onclick = toggleChat;
    closeChat.onclick = toggleChat;

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            const userMessage = document.createElement('div');
            userMessage.innerText = `Вы: ${message}`;
            chatMessages.appendChild(userMessage);
    
            // Имитация ответа чат-бота
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.innerText = `Чат-бот: Ответ на "${message}"`;
                chatMessages.appendChild(botMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight; // Автопрокрутка к последнему сообщению
            }, 1000);
    
            chatInput.value = ''; // Очистка поля ввода после отправки
            chatMessages.scrollTop = chatMessages.scrollHeight; // Прокрутка к низу при добавлении сообщения
        }
    }
    

    chatSend.addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
            e.preventDefault(); // Предотвратить действие по умолчанию для Enter (переход на новую строку)
        }
    });
};