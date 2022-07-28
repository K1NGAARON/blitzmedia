const projectHolder = document.querySelector('#our-projects');

// ARRAY WITH PROJECTS
const projectShowcase = [
    {
        'img' : '',
        'title' : '',
        'intro' : '',
        'url' : ''
    },
    {
        'img' : '',
        'title' : '',
        'intro' : '',
        'url' : ''
    },
    {
        'img' : '',
        'title' : '',
        'intro' : '',
        'url' : ''
    }
];



// Create job post wrapper
function createProject() {
    for (let i = 0; i < jobsArray.length; i++) {
        const projectTemplate = `
            <div>
                <col>
                    <img src="${projectShowcase[i].img}" alt="${projectShowcase[i].title}">
                </col>
                <col>
                    <h3>
                        ${projectShowcase[i].title}
                    </h3>
                    <p>
                        ${projectShowcase[i].intro}
                    </p>
                    <a href="${projectShowcase[i].url}">
                        Lees verder
                    </a>
                </col>
            </div>    
        `;
        projectHolder.insertAdjacentHTML("beforeend", projectTemplate);
    };
};

$(document).ready(function() {
    createProject();
});



// CREATE SLIDER FUNCTION