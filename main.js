document.addEventListener('DOMContentLoaded', () => {
    const notifications = document.querySelectorAll('.notification');
    const redDots = document.querySelectorAll('.red-dot');
    const markAll = document.getElementById('mark-all');


    notifications.forEach((notification, index) => {
        notification.addEventListener('click', () => {
            notification.classList.toggle('active');
            redDots[index].classList.toggle('active');
        });
    });

    markAll.addEventListener('click', () => {
        notifications.forEach((notification, index) => {
            notification.classList.remove('active');
            redDots[index].classList.remove('active');
        });
    });



});
