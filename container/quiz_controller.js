// import {x}from "./question.js"
export function Quiz(questions) {
           this.score = 0;
         this.questions = questions;
         this.questionIndex = 0; }
    // method for check the question index 
   Quiz.prototype.getQuestionIndex=function(){
        return this.questions[this.questionIndex];
    }
    //method for if the quiz is finished 
   Quiz.prototype.isEnded=function() {
        return this.questions.length === this.questionIndex;
    }
    // guss if the current answer is correct 
   Quiz.prototype.guess= function (answer) {
       if (this.getQuestionIndex().correctAnswer(answer)) {
           this.score++;
        }
        this.questionIndex++;
    }

