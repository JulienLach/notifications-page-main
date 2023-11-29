document.addEventListener('DOMContentLoaded', () => {
    const notifications = document.querySelectorAll('.notification');
    const redDots = document.querySelectorAll('.red-dot');

    notifications.forEach((notification, index) => {
        notification.addEventListener('click', () => {
            notification.classList.toggle('active');
            redDots[index].classList.toggle('active');
        });
    });
});
