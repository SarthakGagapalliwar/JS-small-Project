const getAllButtons = document.querySelectorAll('.ripple-effect');

getAllButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        btn.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 500);
    });
});
