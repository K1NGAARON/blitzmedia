// TARGET MOUNT
const textReviewsTarget = document.querySelector('#content .row .wrapper');

const textReviews = [
    {
        body: "Working with Aaron brings peace of mind. Aaron listens very attentively to briefings and manages to cleverly work out and implement tactics to achieve pre-set goals. When you entrust Aaron with an assignment, you can rest easy that the job will be completed properly and on time.",
        name: "Karel-Jan",
        img: '',
    },
    {
        body: "What makes Blitz Media unique is the range of knowledge and how it is implemented. We were able to do our international launch on time and this was mapped cross-media through a lightning-fast website and a marketing campaign to provide it with traffic. I would recommend it to anyone!",
        name: "Anonymous",
        img: '',
    },
    {
        body: "Working with Aaron has been great, super quick in communication, gets things done on time & usually even ahead of time, i've been working with Aaron for the past 6 years, one of the best dudes i've ever worked with.",
        name: "Jake",
        img: './img/jake.jpg',
    },
    {
        body: "Aaron is what I call a tech wizard. It's amazing how fast he can set up tech processes to optimize workflows. He has created multiple platforms for Sunday and all of them have been aesthetically pleasing, clean & intuitive. In my experience, he has been communicative and detail oriented. I've also never seen him miss a deadline. His work is done with care and professionalism. Aaron is without a doubt an asset to any team",
        name: "Birgit",
        img: '',
    },
    {
        body: "Working with Aaron is truly a pleasure. Very hands-on mentality and easy communication. He knows what he’s doing and will definitely create an added value for your company.",
        name: "Jelle",
        img: '',
    },
    {
        body: "A fine cooperation and above all a beautiful end result. Very satisfied with Content Media's website!",
        name: "Lisa",
        img: '',
    },
    {
        body: "Aaron has been really impactful, I started noticing results immediately",
        name: "Nancy",
        img: '',
    }
];


// CREATE NEW RANDOMIZED ARRAY
const newTextArray = textReviews.sort((a, b) => 0.5 - Math.random());


// BUILD REVIEWS
function CreateTextReviews() {
    for (let i = 0; i < newTextArray.length; i++) {
        const template = `
            <div class="item">
                
                <p>
                    "${newTextArray[i].body}"
                </p>
                <h5>
                    - ${newTextArray[i].name}
                </h5>
            </div>
        `;

        textReviewsTarget.insertAdjacentHTML("beforeend", template);
    }
};

// CALL REVIEWS
$(document).ready(CreateTextReviews);