$('.filter-wrapper a').on('click', function(e) {
    e.preventDefault();

    $('.filter-wrapper a').removeClass('active')
    $(this).addClass('active');

    let selectedTopic = $(this).text();
});


const casesTarget = document.querySelector('#content > .row');
const casesContent = [
    {
        'title' : '',
        'intro' : '',
        'img' : '',
        'postLink' : '',
        'category' : '',
    },
    {
        'title' : '',
        'intro' : '',
        'img' : '',
        'postLink' : '',
        'category' : '',
    }
];

function createCasesListing() {
    for (let i = 0; i < casesContent.length; i++) {
        const casesTemplate = `

        `;
        casesTarget.insertAdjacentHTML("afterbegin", casesTemplate);
    };
};


$(document).ready(function() {
    createCasesListing();
});