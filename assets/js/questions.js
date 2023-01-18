// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector('#choices');

var questions = [
  {
    question: "What is a string in javascript?",
    answers: [
        "Something that lets you put words",
        "Something that lets numbers",
        "A type of function",
        "A property of the DOM"
    ],
    correctAnsw: "Something that lets you put words"
  },
  {
    question: "What is JavaScript used for?",
    answers: [
        "Styling a page",
        "Programming only games",
        "Programming websites as well as games and some other stuff",
        "A media website"
    ],
    correctAnsw: "Programming websites as well as games and some other stuff"
  },
  {
    question: "What is HTML?",
    answers: [
        "Styles pages",
        "Gives logic to pages",
        "Provides structure to pages",
        "A type of media file"
    ],
    correctAnsw: "Provides structure to pages"
  },
  {
    question: "What is an array?",
    answers: [
        "A way of storing multiple bits of data",
        "A way of defining a piece of data and giving it a name",
        "A type of function",
        "A special character used as an operator"
    ],
    correctAnsw: "A way of storing multiple bits of data"
  },
  {
    question: "What tag do you use to link a JS file in your HTML code?",
    answers: [
        "<javasc>",
        "<script>",
        "<ps>",
        "<programming>"
    ],
    correctAnsw: "<script>"
  },


]

  // for (var o in questions) {
  //    questionTitle.innerHTML = questions[o].question
  //    questions[o].answers.forEach(ans => {
  //       let qst = document.createElement("li");
  //       qst.innerHTML = ans;
  //       questionChoices.append(qst);
  //    })
  // }


// function renderTodos() {
//     // Clear todoList element and update todoCountSpan
//     todoList.innerHTML = "";
//     todoCountSpan.textContent = todos.length;
  
//     // Render a new li for each todo
//     for (var i = 0; i < todos.length; i++) {
//       var todo = todos[i];
  
//       var li = document.createElement("li");
//       li.textContent = todo;
//       li.setAttribute("data-index", i);
  
//       var button = document.createElement("button");
//       button.textContent = "Complete";
  
//       li.appendChild(button);    //<li data-index="1">LearnCSS <button>Complete</button></li>
//       todoList.appendChild(li);
//     }
  