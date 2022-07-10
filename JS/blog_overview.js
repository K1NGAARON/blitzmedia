$('.blog-filter a').on('click', function(e) {
    e.preventDefault();

    $('.blog-filter a').removeClass('active')
    $(this).addClass('active');

    let selectedTopic = $(this).text();
});



// Create blog posts
const blogsTarget = document.querySelector("#blog-content > .row");
const blogsArray = [
    {
        'blogIMG' : '../IMG/blog/professionele_website_prijs_featured.jpg',
        'blogTitle' : 'Wat kost een professionele website?',
        'blogIntro' : 'Ontdek de verschillende aspecten bij het bepalen van een prijs van een nieuwe website.',
        'blogURL' : '/blog/wat-kost-een-professionele-website.html'
    },
    {
        'blogIMG' : '../IMG/blog/professionele_website_hero.jpg',
        'blogTitle' : 'Een professionele website laten maken',
        'blogIntro' : 'Bij Blitz Media kun je terecht voor een professionele website die volledig op maat gemaakt wordt.',
        'blogURL' : '/blog/een-professionele-website-laten-maken.html'
    },
    {
        'blogIMG' : '../IMG/blog/Google Ads Manager Update.jpg',
        'blogTitle' : 'Google Ads Manager updates',
        'blogIntro' : 'Ontdek de Google Ads Manager update met de 7 grootste veranderingen.',
        'blogURL' : '/blog/google-ads-manager-update.html'
    }
];

function createBlogListing() {
    for (let i = 0; i < blogsArray.length; i++) {
        const blogTemplate = `
        <div class="blog-post-listing">
            <div class="col">
                <img src="${blogsArray[i].blogIMG}" alt="${blogsArray[i].blogTitle}">
            </div>
            <div class="col">
                <h3>
                    ${blogsArray[i].blogTitle}
                </h3>
                <p>
                ${blogsArray[i].blogIntro}
                </p>
                <a href="${blogsArray[i].blogURL}">
                    Lees verder ➔
                </a>
            </div>
        </div>
        `;
        blogsTarget.insertAdjacentHTML("afterbegin", blogTemplate);
    };
};

$(document).ready(function() {
    createBlogListing();
});