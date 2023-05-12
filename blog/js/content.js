const content = [
    {
        title: "Hoe we 150+ leads gegenereerd hebben voor een boekhouder",
        tag: 'advertising',
        body: "De website bezoekers van Freedom Academy hadden geen flauw idee wat het bedrijf net deed.",
        img: "/portfolio/boekhouder/img/banner.jpg",
        url: "/portfolio/boekhouder/",
    },
    {
        title: "Hoe de Freedom Academy bezoekers converteert naar betalende coaching klanten",
        tag: 'website-development',
        body: "De uitdaging bij deze boekhouder was dat er geen manier was om voorspelbaar meer leads (lees: klanten) aan te trekken.",
        img: "/portfolio/freedom-academy/img/banner.jpg",
        url: "/portfolio/freedom-academy/",
    },
    {
        title: "Hoe de Freedom Academy bezoekers converteert naar betalende coaching klanten",
        tag: 'webshop-development',
        body: "De uitdaging bij deze boekhouder was dat er geen manier was om voorspelbaar meer leads (lees: klanten) aan te trekken.",
        img: "/portfolio/freedom-academy/img/banner.jpg",
        url: "/portfolio/freedom-academy/",
    },
];

function createCards(e) {
    const target = document.querySelector('#content');

    const cards = content.map(item => {
        const tagWithSpaces = item.tag.replace(/-/g, ' ');

        return `
            <div class="card ${item.tag}">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <p class="tag">
                        ${tagWithSpaces}
                    </p>
                    <h5>
                        ${item.title}
                    </h5>
                    <a href="${item.url}" class="">
                        Lees meer
                    </a>
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
};

function filterContent(e) {
    // Toggle Active Class on Filter
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.content .card').fadeOut();

    // Selected Tag
    let activeFilter = $(this).attr('id');
    console.log(activeFilter);

    if (activeFilter === 'all') {
        $('.content .card').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
}

$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});