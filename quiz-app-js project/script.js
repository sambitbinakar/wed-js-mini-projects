const question = [
    {
        question:"which is largest animal in the world",
        answer:[
            {text:"elephant" , correct: false},
            {text:"shark" , correct: false},
            {text:"blue wheal" , correct: true},
            {text:"crocdile" , correct: false},
        ]
    },
    {
        question:"which is largest desert in the world",
        answer:[
            {text:"kalaharit" , correct: false},
            {text:"Gobi" , correct: false},
            {text:"Sahara" , correct: true},
            {text:"Antarctica" , correct: false},
        ]
    },
    {
        question:"which is smallest continent in the world",
        answer:[
            {text:"Asia" , correct: false},
            {text:"Australia" , correct: true},
            {text:"Arctic" , correct: false},
            {text:"Africa" , correct: false},
        ]
    },
    {
        question:"which is national animal of the India",
        answer:[
            {text:"elephant" , correct: false},
            {text:"lion" , correct: false},
            {text:"tiger" , correct: true},
            {text:"giraff" , correct: false},
        ]
    },
    {
        question:"which is smallest country in the world",
        answer:[
            {text:"india" , correct: false},
            {text:"America" , correct: false},
            {text:"Vatican City" , correct: true},
            {text:"Australia" , correct: false},
        ]
    }
];

const qusElement = document.getElementById("question");
const ansBtn = document.getElementById("ans-btn");
const nextBtn =document.getElementById("next-btn");

let currentQusIndex = 0;
let score =0;

function  startQuiz(){
    currentQusIndex = 0;
    score = 0  ;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let curentQuestion = question[currentQusIndex];
    let questionNo = currentQusIndex + 1;
    qusElement.innerHTML = questionNo + " . "+ curentQuestion.question;

    curentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAns);
    });
};


function resetState(){
    nextBtn.style.display ="none";
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);

    }
};


function selectAns(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(ansBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
};

function showscore(){
    resetState();
    qusElement.innerHTML = `you scored ${score} out of ${question.length}!`;
    nextBtn.innerHTML = "play Again";
    nextBtn.style.display = "block";
};

function handleNextbtn(){
    currentQusIndex++;
    if(currentQusIndex < question.length){
        showQuestion();
    }else{
        showscore();
    }
};

nextBtn.addEventListener("click" , () =>{
    if(currentQusIndex < question.length){
        handleNextbtn();
    }else{
        startQuiz();
    }
});


