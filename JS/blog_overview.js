$('.blog-filter a').on('click', function(e) {
    e.preventDefault();

    $('.blog-filter a').removeClass('active')
    $(this).addClass('active');

    let selectedTopic = $(this).text();

    // Hide everything
    // Show clicked element label
});



// Create blog posts
const blogsTarget = document.querySelector("#blog-content > .row");
const blogsArray = [
    {
        'blogIMG' : '../IMG/blog/professionele_website_prijs_featured.jpg',
        'blogTitle' : 'Wat kost een professionele website?',
        'blogIntro' : 'Ontdek de verschillende aspecten bij het bepalen van een prijs van een nieuwe website.',
        'blogURL' : '/blog/wat-kost-een-professionele-website.html'
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
                    Read more ➔
                </a>
            </div>
        </div>
        `;
        blogsTarget.insertAdjacentHTML("beforeend", blogTemplate);
    };
};

$(document).ready(function() {
    createBlogListing();
});