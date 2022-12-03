$('.filter-wrapper a').on('click', function(e) {
    e.preventDefault();

    $('.filter-wrapper a').removeClass('active')
    $(this).addClass('active');

    let selectedTopic = $(this).text();
});



// Create blog posts
const blogsTarget = document.querySelector("#content .row .wrapper");
const contentArray = [

]

function createBlogListing() {
    for (let i = 0; i < blogsArray.length; i++) {
        const template = `
        
        `;
        blogsTarget.insertAdjacentHTML("afterbegin", template);
    };
};

$(document).ready(function() {
    createBlogListing();
});