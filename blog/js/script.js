$('.filter-wrapper a').on('click', function(e) {
    e.preventDefault();

    $('.filter-wrapper a').removeClass('active')
    $(this).addClass('active');

    let selectedTopic = $(this).text();
});


const contentTarget = document.querySelector("#content .row .wrapper");
const contentArray = [
    {
        title: '',
        intro: '',
        img: '',
        url: '',
        client: '',
        category: '',
    }
]

function createBlogPosts() {
    for (let i = 0; i < contentArray.length; i++) {
        const template = `
        
        `;
        contentTarget.insertAdjacentHTML("afterbegin", template);
    };
};

$(document).ready(createBlogPosts);