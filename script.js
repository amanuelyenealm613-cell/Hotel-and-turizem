document.addEventListener("DOMContentLoaded", () => {
    console.log("Hotel Management Main Portal loaded successfully.");

    // Dynamic hover effects & link analytics logging
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(`Navigating to: ${e.target.innerText.trim()} -> ${e.target.href}`);
        });
    });
});
