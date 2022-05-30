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
        'positionTitle' : 'International Recruiter'
    }
];

function createBlogListing() {
    for (let i = 0; i < blogsArray.length; i++) {
        const blogTemplate = `
            <div class="job-post ${blogsArray[i].positionCountry}">
                <div class="col">
                    <img src="${blogsArray[i].positionIMG}" alt="${blogsArray[i].positionALT}">
                </div>
                <div class="col">
                    <div class="country-wrapper">
                        <img class="flag-img" src="${blogsArray[i].flagURL}" alt="${blogsArray[i].positionCountry}">
                        <p class="flag-country">
                            ${blogsArray[i].positionCity}
                        </p>
                    </div>
                    <h3>
                        ${blogsArray[i].positionTitle}
                    </h3>
                    <p>
                        ${blogsArray[i].positionText}
                    </p>
                    <a class="custom-btn" href="${blogsArray[i].positionURL}">Read more</a>
                </div>
            </div>
        `;
        blogsTarget.insertAdjacentHTML("beforeend", blogTemplate);
    };
};

$(document).ready(function() {
    createBlogListing();
});