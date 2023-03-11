// STICKY LARGE MENU
$(document).scroll(function () {
    const header = $('.header');
    const logo = $('.header .logo');

    if ($(this).scrollTop() > header.height()) {
        $(logo).attr("src","/branding/logo/logo-black.png");
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

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};


// CREATE LOGO SECTION
const target = document.querySelector('.logos > .row > .wrapper');
const logos = [
    {
        img: '/img/clients/cfl-logo.png',
        client: 'Cashflow For Life'
    },
    {
        img: '/img/clients/fa-logo.png',
        client: 'Freedom Academy'
    },
    {
        img: '/img/clients/sunday-logo.png',
        client: 'Sunday'
    },
    {
        img: '/img/clients/klimatherm-logo.png',
        client: 'Klimatherm'
    },
    {
        img: '/img/clients/tvh.png',
        client: 'TVH',
    },
    {
        img: '/img/clients/lansweeper.png',
        client: 'Lansweeper',
    },
    {
        img: '/img/clients/kordekor-logo.png',
        client: 'Kordekor',
    },
];


function createLogos() {
    if (target) {
        shuffleArray(logos);
        for (let i = 0; i < 6; i++) {
            const template = `
                <div class="item">
                    <img src="${logos[i].img}" alt="${logos[i].client}">
                </div>
            `;
            target.insertAdjacentHTML("beforeend", template);
        };
    }
};

$(document).ready(createLogos);