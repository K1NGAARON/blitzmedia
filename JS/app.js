// STICKY LARGE MENU
$(document).scroll(function () {
    const header = $('.header');
    const logo = $('.logo');

    if ($(this).scrollTop() > header.height()) {
        $(logo).attr("src","../branding/logo/logo-black.png");
        header.addClass('active');
    } else {
        $(logo).attr("src","/branding/logo/logo-white.png");
        header.removeClass('active');
    }
});

// SMALL MENU
$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

// CREATE LOGO SECTION
const target = document.querySelector('.logos > .row > .wrapper');
const logos = [
    {
        img: '/img/clients/cfl-logo.png',
        client: ''
    },
    {
        img: '/img/clients/fa-logo.png',
        client: ''
    },
    {
        img: '/img/clients/sunday-logo.png',
        client: ''
    },
    {
        img: '/img/clients/fa-logo.png',
        client: ''
    },
    {
        img: '/img/clients/klimatherm-logo.png',
        client: ''
    },
    {
        img: '/img/clients/cfl-logo.png',
        client: ''
    },
    {
        img: '/img/clients/fa-logo.png',
        client: ''
    }
];


function createLogos() {
    for (let i = 0; i < logos.length; i++) {
        const template = `
            <div class="item">
                <img src="${logos[i].img}" alt="${logos[i].client}">
            </div>
        `;
        target.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createLogos);
