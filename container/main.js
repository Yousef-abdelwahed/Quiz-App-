
import{Question} from "./question.js";
import {Quiz} from "./quiz_controller.js";


function populate(){
    if (quiz.isEnded()){
        
        showScores()
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML= quiz.getQuestionIndex().text;
   
        //show Choice
        var choices= quiz.getQuestionIndex().choices;
        for (let i=0; i < choices.length; i++)
        {
            let elementOfXhoices =document.getElementById("choice"+i);
            elementOfXhoices.innerHTML=choices[i];
            guess("btn"+i,choices[i]);
        }
    }
};
   function guess(id,guess){
    var button=document.getElementById(id)
    button.onclick=function(){
        quiz.guess(guess);
        populate();
    }
    showProgress();
   }

   function showScores(){
        let gameOver=`<h1> Result</h1>`;
        gameOver+= `<h2 id="scores">Your Score :${quiz.score}</h2> `;
        let elemenQuiz = document.getElementById("quiz");
        elemenQuiz.innerHTML = gameOver;
    };
    // show progress of score
    function showProgress(){
        let currentQuestionNumber= quiz.questionIndex+1;
        let elementOfProgressQuestion = document.getElementById("progress");
      
        if(currentQuestionNumber===5){
            elementOfProgressQuestion.style.display="none"
        }else
        {
            elementOfProgressQuestion.innerHTML= "Question " + currentQuestionNumber + " / " + quiz.questions.length; }
        };

var questions =[
    new Question("Which one is not an OOP language",["Java","CSS","C++","C"],"C"),
    new Question("Which  language Styling web pages",["HTML","Jouery","CSS","XML"],"CSS"),
    new Question("there are _____ main conponents of oriented programming",["1","6","2","4"],"4"),
    new Question("Which language is use for web badge",["PHP","Python","js","All"],"All"),
    new Question("MVC is a ____",["launguge","liberary","FrameWork","design pattern"],"design pattern"),

] 


var quiz =new Quiz(questions);
populate()








