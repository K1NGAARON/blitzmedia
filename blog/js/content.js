const content = [
    {
        title: "12 SEO tips om hoog te scoren in Google",
        tag: "seo",
        body: "",
        img: "/blog/12-seo-tips-om-te-scoren-in-google/img/banner.jpg",
        url: "/blog/12-seo-tips-om-te-scoren-in-google/",
    },
    {
        title: "Hoe genereer je gekwalificeerde leads via je website?",
        tag: "digital-marketing",
        body: "",
        img: "/blog/hoe-leads-genereren-via-website/img/banner.jpg",
        url: "/blog/hoe-leads-genereren-via-website/",
    },
    {
        title: "Hoeveel Kost Een Professionele Website?",
        tag: "website-development",
        body: "",
        img: "/blog/hoeveel-kost-een-professionele-website/img/banner.jpg",
        url: "/blog/hoeveel-kost-een-professionele-website/",
    },
    {
        title: "Hoe Hoger Scoren in Google in 2023",
        tag: "seo",
        body: "",
        img: "/blog/hoger-scoren-in-google/img/banner-2.jpg",
        url: "/blog/hoger-scoren-in-google/",
    },
    {
        title: "Een Professionele Website Laten Maken",
        tag: "website-development",
        body: "",
        img: "/blog/professionele-website-laten-maken/img/banner.jpg",
        url: "/blog/professionele-website-laten-maken/",
    },
    {
        title: "SEO Termen en Definities - Alles wat je moet weten",
        tag: "seo",
        body: "",
        img: "/blog/seo-termen-en-definities/img/banner.jpg",
        url: "/blog/seo-termen-en-definities/",
    },
    {
        title: "Hoeveel kost het om een website te laten maken? Prijzen en meer.",
        tag: "website-development",
        body: "",
        img: "/blog/hoeveel-kost-een-website-maken/img/banner.jpg",
        url: "/blog/hoeveel-kost-een-website-maken/",
    },
    {
        title: "Websitebouwer in Oostende",
        tag: "website-development",
        body: "",
        img: "/blog/website-bouwer-oostende/img/banner.jpg",
        url: "/blog/website-bouwer-oostende/",
    },
    {
        title: "Wat kost een professionele website? Prijsbepaling en belangrijke factoren",
        tag: "website-development",
        body: "",
        img: "/blog/wat-kost-een-professionele-website/img/banner.jpg",
        url: "/blog/wat-kost-een-professionele-website/",
    },
    {
        title: "Wat is linkbuilding? - Alles wat je moet weten",
        tag: "seo",
        body: "",
        img: "/blog/wat-is-linkbuilding/img/banner.jpg",
        url: "/blog/wat-is-linkbuilding/",
    },
    {
        title: "Hoe zorg je ervoor dat je website stand biedt aan de steeds groter wordende competitie?",
        tag: "website-development",
        body: "",
        img: "/blog/website-stand-bieden-competitie/img/banner.jpg",
        url: "/blog/website-stand-bieden-competitie/",
    },
    {
        title: "Een website laten maken: waarom het de investering waard is",
        tag: "website-development",
        body: "",
        img: "/blog/website-laten-maken/img/banner.jpg",
        url: "/blog/website-laten-maken/",
    },
    {
        title: "Website laten optimaliseren: verbeter de prestaties van je website",
        tag: "website-development",
        body: "",
        img: "/blog/website-laten-optimaliseren/img/banner.jpg",
        url: "/blog/website-laten-optimaliseren/",
    },
    {
        title: "Maak Een Website In 4 Stappen",
        tag: "website-development",
        body: "",
        img: "/blog/website-stappenplan/img/banner.jpg",
        url: "/blog/website-stappenplan/",
    },
    {
        title: "Website laten maken zonder maandelijkse kosten: zo doe je dat",
        tag: "website-development",
        body: "",
        img: "/blog/website-zonder-maandelijkse-kosten/img/banner.jpg",
        url: "/blog/website-zonder-maandelijkse-kosten/",
    },
    {
        title: "Hoe zorg je voor meer verkoop via de webshop?",
        tag: "digital-marketing",
        body: "",
        img: "/blog/meer-verkoop-via-webshop/img/banner.jpg",
        url: "/blog/meer-verkoop-via-webshop/",
    },
    // {
    //     title: "",
    //     tag: "",
    //     body: "",
    //     img: "",
    //     url: "",
    // },
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