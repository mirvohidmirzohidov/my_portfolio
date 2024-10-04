// document.querySelectorAll(".nav-link").forEach(link => {
//     link.addEventListener("click", function() {
//         const currentActive = document.querySelector(".nav-link.aktiv");
//         if (currentActive) {
//             currentActive.classList.remove("aktiv");
//         }
//         this.classList.add("aktiv");
//     });
// });


// document.querySelector(".contact_btn").addEventListener("click", function() {
//     const currentActive = document.querySelector(".nav-link.active");
//     if (currentActive) {
//         currentActive.classList.remove("active");
//     }
//     this.classList.add("active");
// });



// Preloader
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
        document.body.classList.remove('loading');

        // Navbar va kontent animatsiyalari
        document.querySelector('.navbar-animate').classList.add('active');
        document.querySelectorAll('.content-animate').forEach(el => el.classList.add('active'));
    }, 500);
});

// Sahifa almashganda navbar va kontent animatsiyalarini qo'llash
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (event) {
        const href = this.getAttribute('href');
        if (!href.includes('#')) { // Anchor linklarni e'tiborsiz qoldirish
            event.preventDefault();

            // Navbarni tepaga chiqib ketishini qo'shamiz
            document.querySelector('.navbar-animate').classList.add('navbar-exit');

            // Sahifani fade-out qiladi
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 500); // Navbar animatsiyasi va sahifa o'zgarishi uchun kutish vaqti
        }
    });
});
