document.addEventListener('DOMContentLoaded', () => {
    const notifications = document.querySelectorAll('.notification');
    const redDots = document.querySelectorAll('.red-dot');
    const markAll = document.getElementById('mark-all');
    const counter = document.getElementById('counter');



    function updateCounter() {
        const activeNotifications = document.querySelectorAll('.notification.active').length;
        counter.textContent = activeNotifications;
    }

    // Set the first three notifications to the active state by default
    for (let i = 0; i < 3 && i < notifications.length; i++) {
        notifications[i].classList.add('active');
        redDots[i].classList.add('active');
    }

    // Update the counter after setting the default active notifications
    updateCounter();

    notifications.forEach((notification, index) => {
        notification.addEventListener('click', () => {
            notification.classList.toggle('active');
            redDots[index].classList.toggle('active');
            updateCounter();
        });
    });

    markAll.addEventListener('click', () => {
        notifications.forEach((notification, index) => {
            notification.classList.remove('active');
            redDots[index].classList.remove('active');
            updateCounter();
        });
    });



});