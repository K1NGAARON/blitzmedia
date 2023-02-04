const processSteps = [
    {
        headline: 'Kennismakingsgesprek',
        body: "Er zijn heel wat zaken die gebeuren voordat we starten aan jouw project. We starten met een vrijblijvend kennismakingsgesprek om af te toetsen of we een goede match zijn. Hierin bekijken we ook de exacte doelen van het project en uiteindelijk komen we dan met een praktisch stap-voor-stap plan.",
        img: '/home/img/planning.jpg'
    },
    {
        headline: 'Digitaal voorbeeld',
        body: "Tijdens deze periode is er maar 1 doel: een digitaal voorbeeld ontwerpen waar jij 100% tevreden mee bent. De input uit ons kennismakingsgesprek zal hier verwerkt worden.",
        img: '/home/img/wireframe.jpg'
    },
    {
        headline: 'Ontwikkeling',
        body: "Eens het digitaal voorbeeld afgewerkt is beginnen we met de ontwikkeling van jouw custom website/webshop. Aangezien elke website volledig custom geprogrammeerd wordt zijn er hier absoluut geen limitaties aan wat er mogelijk is.",
        img: '/home/img/development.jpg'
    },
    {
        headline: 'Testen & Feedback',
        body: "Na verschillende feedback ronde is de nieuwe website af en gaan we deze uitgebreid gaan testen zodat er zeker geen fouten zijn eens we lanceren. Wanneer de testen succesvol afgerond zijn is het tijd om jouw project te lanceren!",
        img: '/home/img/feedback.jpg'
    },
    {
        headline: 'Onderhoud',
        body: "De samenwerking stopt uiteraard niet na het lanceren van jouw website. Blitz Media blijft het onderhoud van jouw website verzorgen.",
        img: '/home/img/hosting.jpg'
    }
];

function showProcess(e) {
    let titleHolder = document.querySelector('#titleHolder');
    let bodyHolder = document.querySelector('#bodyHolder');
    let imageHolder = document.querySelector('#imageHolder');

    let activeStep = e.target.id;

    $('.step').removeClass('active');
    $(this).addClass('active');


    if (activeStep === 'discovery') {
        $(titleHolder).text(processSteps[0].headline);
        $(bodyHolder).text(processSteps[0].body);
        $(imageHolder).attr('src', processSteps[0].img);
    } else if (activeStep === 'wireframe') {
        $(titleHolder).text(processSteps[1].headline);
        $(bodyHolder).text(processSteps[1].body);
        $(imageHolder).attr('src', processSteps[1].img);
    } else if (activeStep === 'development') {
        $(titleHolder).text(processSteps[2].headline);
        $(bodyHolder).text(processSteps[2].body);
        $(imageHolder).attr('src', processSteps[2].img);
    } else if (activeStep === 'testing') {
        $(titleHolder).text(processSteps[3].headline);
        $(bodyHolder).text(processSteps[3].body);
        $(imageHolder).attr('src', processSteps[3].img);
    } else if (activeStep === 'hosting') {
        $(titleHolder).text(processSteps[4].headline);
        $(bodyHolder).text(processSteps[4].body);
        $(imageHolder).attr('src', processSteps[4].img);
    };

};

$('.step').click(showProcess);