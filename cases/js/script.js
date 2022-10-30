function filterContent(e) {
    
}

$('.filter-wrapper a').on('click', function(e) {
    e.preventDefault();

    $('.filter-wrapper a').removeClass('active')
    $(this).addClass('active');

    let selectedTopic = $(this).text();
});


const casesTarget = document.querySelector('#content > .row');
const casesContent = [
    {
        'title' : 'Content Media website revamp',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'webdev',
    },
    {
        'title' : 'The B2B paid ads strategy for Sunday',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'advertising',
    }
];

function createCasesListing() {
    for (let i = 0; i < casesContent.length; i++) {
        const casesTemplate = `
        <div class="case-wrapper ${casesContent[i].category}">
            <img src="${casesContent[i].img}" alt="${casesContent[i].title}">
            <div class="content">
                <h3>
                    ${casesContent[i].title}
                </h3>
                <p>
                    ${casesContent[i].intro}
                </p>
                <a href="${casesContent[i].postLink}">
                    Read more
                </a>
            </div>
        </div>
        `;
        casesTarget.insertAdjacentHTML("afterbegin", casesTemplate);
    };
};


$(document).ready(function() {
    createCasesListing();
});