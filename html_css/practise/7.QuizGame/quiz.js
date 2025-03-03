
const data = [

    {
        "id": 1,
        "question": "What is HTML?",
        "options": [
            {
                "value": "Hyper Text Markup Language",
                "isCorrect": true
            },
            {
                "value": "Hyper Text Makeup Language",
                "isCorrect": false
            },
            {
                "value": "Hyper Text Model Language",
                "isCorrect": false
            },

            {
                "value": "Hyper Test Markup Language",
                "isCorrect": false
            },

        ]
    },
    {
        "id": 2,
        "question": "What is CSS?",
        "options": [
            {
                "value": "Cascading Style Sheet",
                "isCorrect": true
            },

            {
                "value": "Cascading Storm Sheet",
                "isCorrect": false
            },

            {
                "value": "Cascading String Sheet",
                "isCorrect": false
            },

            {
                "value": "Cascading Modern Sheet",
                "isCorrect": false
            },

        ]
    },

    {
        "id": 3,
        "question": "What is Javascript?",
        "options": [
            {
                "value": "Programming language",
                "isCorrect": true
            },

            {
                "value": "Style Sheet",
                "isCorrect": false
            },

            {
                "value": "Open Source",
                "isCorrect": false
            },

            {
                "value": "High Level language",
                "isCorrect": false
            },

        ]
    }
]
const noOfQuestions = data.length;
let currentQuestion = 0;



const backCta = document.getElementById("back");
const nextCta = document.getElementById("next");
backCta.addEventListener("click", function (e) {
    console.log("clicked back");
    currentQuestion = currentQuestion - 1;
    renderQuestionDetails();

    if (currentQuestion === 0) {
        backCta.setAttribute("disabled", true);
    }
    nextCta.removeAttribute("disabled");
})

nextCta.addEventListener("click", function (e) {
    console.log("clicked back");
    currentQuestion = currentQuestion + 1;
    renderQuestionDetails();
    if ((noOfQuestions - 1) === currentQuestion) {
        nextCta.setAttribute("disabled", true);
    }
    backCta.removeAttribute("disabled");



})
function initialRender() {
    if (currentQuestion === 0) {
        backCta.setAttribute("disabled", true)
        document.getElementById('1').classList.add("bg-green-500");
    } else if (currentQuestion === (noOfQuestions - 1)) {
        nextCta.setAttribute("disabled", true)
        document.getElementById(noOfQuestions).classList.add("bg-green-500");
    } else {
        document.getElementById(currentQuestion + 1).classList.add("bg-green-500");
    }
}






function renderQuestionCta() {
    const sideBarList = document.getElementById("sidebar-list");
    for (let x = 1; x <= data.length; x++) {
        const button1 = createQuestionCta(x);
        sideBarList.appendChild(button1);
    }
}

function createQuestionCta(num = 0) {

    const li = document.createElement("li");
    li.innerHTML = `<button id="${num}" class="w-14 h-14 border-4 border-green-400 rounded-full ">${num}
                        </button>`

    li.addEventListener("click", handlePageChange);
    return li;
}


renderQuestionCta();


function renderQuestionDetails() {

    currentQuestionData = data[currentQuestion];
    const title = document.getElementById("title");
    const currentQuestionNo = document.getElementById("currentQuestionNo");
    const totalQuestions = document.getElementById("totalQuestions");
    currentQuestionNo.innerText = currentQuestion + 1;
    title.innerText = currentQuestionData.question;
    totalQuestions.innerText = noOfQuestions;

    renderOptions(currentQuestionData.options);

}

function renderOptions(options = []) {

    const optionContainer = document.getElementById("optionContainer");
    optionContainer.innerHTML = "";
    for (let y = 0; y < options.length; y++) {

        optionContainer.appendChild(createOptions(options[y]));
    }

}

function createOptions(option = {}) {

    const optionElement = document.createElement("li");
    optionElement.innerHTML = `<button class="w-full h-12 border-green-500 border-2 rounded mb-5 hover:bg-green-500">
                            ${option.value}
                        </button>`;

    return optionElement;

}

function handlePageChange(e) {
    handleOptionCtaClick(currentQuestion + 1)

    currentQuestion = parseInt(e.target.id) - 1;
    renderQuestionDetails();
    e.target.classList.add("bg-green-500");



}
function handleOptionCtaClick(num = 0) {
    const currentActiveCta = document.getElementById(num);
    currentActiveCta.classList.remove("bg-green-500");


}


renderQuestionDetails();
initialRender();

