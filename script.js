// cookies
var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = "sim"
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}
// fim-cookies

// menu
// document.addEventListener('scroll', function () {
//     var menu = document.getElementById('menu');
//     var scrollPosition = window.scrollY;

//     if (scrollPosition > 2000) { // Ajuste esse valor conforme necessário
//         menu.classList.add('hidden');
//     } else {
//         menu.classList.remove('hidden');
//     }
// });

// // botão de voltar
// document.addEventListener('scroll', function () {
//     var topButton = document.getElementById('subir');
//     var scrollPosition = window.scrollY;

//     // Ajuste este valor conforme necessário para determinar a posição em que o botão aparecerá
//     var triggerPoint = 300;

//     if (scrollPosition > triggerPoint) {
//         topButton.style.display = 'block';
//     } else {
//         topButton.style.display = 'none';
//     }
// });


// tocar cor do menu
window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var scrollTop = window.scrollY;

    // Defina a posição do scroll que ativa a mudança de cor do menu
    var scrollThreshold = 150;

    if (scrollTop > scrollThreshold) {
        menu.classList.add('menu-scrolled');
    } else {
        menu.classList.remove('menu-scrolled');
    }
});


// menu e div
document.querySelector('a[href^="#container-3"]').addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const offset = targetElement.offsetTop - document.getElementById('menu').offsetHeight;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
});

document.getElementById("paises").addEventListener("change", function() {
    var selectedValue = this.value;

});