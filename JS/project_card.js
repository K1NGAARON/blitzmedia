const projectHolder = document.querySelector('#our-projects');

// ARRAY WITH PROJECTS
const projectShowcase = [
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/06/croky-hero-1024x683.jpg',
        'title' : 'Website ontwikkeling',
        'intro' : 'Content media social',
        'url' : '../cases/content-media-social.html'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/06/croky-hero-1024x683.jpg',
        'title' : 'Lead generatie',
        'intro' : 'Sunday lead gen',
        'url' : '../cases/sunday.html'
    },
    {
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/06/croky-hero-1024x683.jpg',
        'title' : 'Website ontwikkeling',
        'intro' : 'Jake plaskie',
        'url' : '../cases/jake-plaskie-coaching.html'
    }
];



// Create job post wrapper
function createProject() {
    for (let i = 0; i < 1; i++) {
        const projectTemplate = `
            <div class="project-wrapper">
                <div class="col">
                    <img src="${projectShowcase[i].img}" alt="${projectShowcase[i].title}">
                </div>
                <div class="col">
                    <h3>
                        ${projectShowcase[i].title}
                    </h3>
                    <p>
                        ${projectShowcase[i].intro}
                    </p>
                    <a href="${projectShowcase[i].url}">
                        Lees verder
                    </a>
                </div>
            </div>    
        `;
        projectHolder.insertAdjacentHTML("beforeend", projectTemplate);
    };
};

$(document).ready(function() {
    createProject();
});



// CREATE SLIDER FUNCTION