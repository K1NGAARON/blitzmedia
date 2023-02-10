const projects = [
    {
        title: "",
        body: "",
        img: '',
        url: '',
    },
    {
        title: "",
        body: "",
        img: '',
        url: '',
    },
    {
        title: "",
        body: "",
        img: '',
        url: '',
    },
];

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