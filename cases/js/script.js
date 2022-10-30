function hideAll(e) {
    $('.case-wrapper').addClass('hidden');
}


$('.filter-wrapper a').on('click', function(e) {
    e.preventDefault();

    hideAll();

    $('.filter-wrapper a').removeClass('active')
    $(this).addClass('active');

    let activeContent = e.target.innerHTML.toLowerCase();
    console.log(activeContent);

    if (activeContent === 'all') {
        $('.case-wrapper').removeClass('hidden');
    } else if (activeContent === 'web development') {
        $('.case-wrapper.web-development').removeClass('hidden');
    } else if (activeContent === 'advertising') {
        $('.case-wrapper.advertising').removeClass('hidden');
    } else {
        // Nothing
    };
});


const casesTarget = document.querySelector('#content > .row');
const casesContent = [
    {
        'title' : 'Content Media website revamp',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'web-development',
    },
    {
        'title' : 'The B2B paid ads strategy for Sunday',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'advertising',
    },
    {
        'title' : 'Generating €100.000 in revenue for this brand',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'advertising',
    },
    {
        'title' : 'Custom Built website for a local fitness coach',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'web-development',
    },
    {
        'title' : 'Modern responsive website for a plumber',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'web-development',
    },
    {
        'title' : 'Facebook ads for a high-end accountant',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'advertising',
    },
    {
        'title' : 'Internal webshop for a high-end fashion company',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'web-development',
    },
    {
        'title' : 'Modern, responsive website for crypto consultant',
        'intro' : 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        'img' : 'https://blitz-media.io/IMG/aaron_gerard.jpg',
        'postLink' : 'google.com',
        'category' : 'web-development',
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
        casesTarget.insertAdjacentHTML("beforeend", casesTemplate);
    };
};


$(document).ready(function() {
    createCasesListing();
});