const blogOverviewTarget = document.querySelector('#content');
const projects = [
    {
        title: "Een professionele website laten maken",
        body: "Ontdek waarom het essentieel is om een professionele website te laten maken voor jouw bedrijf.",
        img: '/blog/professionele-website-laten-maken/img/banner.jpg',
        url: '/blog/professionele-website-laten-maken/',
    },
    {
        title: "Hoeveel Kost Een Professionele Website?",
        body: "De kostprijs van een website bevindt zich tussen de €500 en €2.000. Het verschil hangt af van de complexiteit en grootte van de website.",
        img: '/blog/hoeveel-kost-een-professionele-website/img/banner.jpg',
        url: '/blog/hoeveel-kost-een-professionele-website/',
    },
    {
        title: "Maak Een Website In 4 Stappen",
        body: "De kostprijs van een website bevindt zich tussen de €500 en €2.000.",
        img: '/blog/website-stappenplan/img/banner.jpg',
        url: '/blog/website-stappenplan/',
    },
    {
        title: "Website Laten Optimaliseren",
        body: "Heb je een website maar behaal je niet de gewenste resultaten? Dan is het laten optimaliseren van je website wellicht de oplossing.",
        img: '/blog/website-laten-optimaliseren/img/banner.jpg',
        url: '/blog/website-laten-optimaliseren/',
    },
    {
        title: "Website laten maken zonder maandelijkse kosten",
        body: "Wil je graag een professionele website laten maken zonder dat je vastzit aan maandelijkse kosten? Dan zijn er verschillende opties waar je uit kunt kiezen.",
        img: '/blog/website-zonder-maandelijkse-kosten/img/banner.jpg',
        url: '/blog/website-zonder-maandelijkse-kosten/',
    },
    // {
    //     title: "",
    //     body: "",
    //     img: "",
    //     url: "",
    // },
    // {
    //     title: "",
    //     body: "",
    //     img: "",
    //     url: "",
    // },
    // {
    //     title: "",
    //     body: "",
    //     img: "",
    //     url: "",
    // },
];

function createCards() {
    for (let i = 0; i < projects.length; i++) {
        const template = `
            <div class="card">
                <img src="${projects[i].img}" alt="${projects[i].title}">
                <h5>
                    ${projects[i].title}
                </h5>
                <p>
                    ${projects[i].body}
                </p>
                <a href="${projects[i].url}" class="btn ghost">
                    Lees artikel
                </a>
            </div>
        `;
        blogOverviewTarget.insertAdjacentHTML("afterbegin", template);
    };
};

$(document).ready(createCards);


const faq = [
    {
        question: "Hoe lang duurt het om een website te maken?",
        answer: "Hoe lang het duurt om een website te maken hangt volledig af van de grootte en complexiteit van het project. Een complexe website zal namelijk een stuk langer duren dan een simpele website. De duur van het project wordt ook besproken op ons eerste gesprek dus je zal hier zeker en vast niet voor verrassingen komen te staan!",
    },
    {
        question: "Hoeveel kost een nieuwe website?",
        answer: "Net als de tijd die vereist is om jouw nieuwe website te maken, hangt het budget ook volledig af van de complexiteit en grootte van de website. Vul het formulier in voor meer informatie.",
    },
    {
        question: "Kan ik niet gewoon zelf een website maken?",
        answer: "Uiteraard kun je zelf een website maken maar dan moet je ook even gaan uitrekenen hoeveel het je kost om hier meerdere weken/maanden werk in te stoppen. Een website laten maken door een professional zal je gegarandeerd een beter resultaat opleveren dan als je zelf een website zou maken.",
    },
    {
        question: "Zit ik vast aan een contract?",
        answer: "Neen, bij Blitz Media werken we niet met contracten waar je jarenlang aan vast zal zitten.",
    },
    {
        question: "Hoe snel kan ik starten?",
        answer: "Dat hangt compleet af van jezelf, vul het formulier in zodat we een kort kennismakingsgesprek kunnen voeren. Als er een match is kunnen we onmiddellijk starten aan jouw project!",
    },
];

// randomize projects

// Build projects
// => CARDS

// Build FAQ
// => SUNDAY FAQ TEMPLATE

function createFAQ(e) {
    let faqWrapper = `
        <div class="wrapper faq">
            <div class="accordion-list">

            </div>
        </div>
    `;

    for (let i = 0; i < faq.length; i++) {
        let faqItem = `
            <div class="accordion-item">
                <div class="accordion-head">
                    <h5>

                    </h5>
                    <div class="icon">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        `; 
    };

    // Insert wrapper
    // Insert items
    // Add active to first "item"
};

// FAQ OPEN AND CLOSE LOGIC

