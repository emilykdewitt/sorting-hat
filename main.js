const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
const housedStudents = [];
const expelledStudents = [];

//This function will keep the student entry form hidden until the 'Get Started' Button is clicked
const hideStudentEntryForm = () => {
  document.getElementById('studentEntry').style.display = 'none';
};

//This function causes the student entry form to appear when the 'Get Started' button is clicked
const showStudentEntryForm = () => {
  document.getElementById('studentEntry').style.display = 'block';
};

//This allows us to print to a selected div in our html
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//the function below displays an alert message when the user clicks 'sort' but hasn't added a student
const blankFieldAlert = () => {
  let domString = ``;
  domString += 
    `<div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Gulping gargoyles!</strong> You must enter a student name above before you can sort.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`;
  printToDom('blankFieldAlert', domString);
};

//I declared the domString outside of the cardBuilder because I didn't want a new card-columns div to be created every time
var domString = `<div class="card-columns" id="card-column">`;

//This builds the domString of all the cards I want to print with student names and then clears the input field

const studentObjectBuilder = () => {
  let studentObject = {name: ``, house: ``, crest: ``};
  studentObject.name = document.getElementById("studentNameInput").value; //gets the name the user has input
  studentObject.house = hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)]; //assigns random Hogwarts house
  if (studentObject.house === 'Gryffindor') {
    studentObject.crest = 'housecrests/gryffindor.png';
  } else if (studentObject.house === 'Hufflepuff') {
    studentObject.crest = 'housecrests/hufflepuff.png';
  } else if (studentObject.house === 'Slytherin') {
    studentObject.crest = 'housecrests/slytherin.png'
  } else {
    studentObject.crest = 'housecrests/ravenclaw.png'
  };
  housedStudents.push(studentObject); //adds object to housedStudents array
};

const cardBuilder = (selectedArray) => {
  selectedArray.forEach((student) => {
    let domString = ``;
    domString += `<div class="card text-center" id="${student.house}">`;
    domString +=  `<div class="card-body ${student.house}">`
    domString +=    `<img class="crestimage" src="${student.crest}">`;
    domString +=    `<h5 class="card-title">${student.name}</h5>`
    domString +=    `<a id="expelBtn" class="btn btn-primary">Expel</a>`
    domString +=  `</div>`;
    domString += `</div>`;
    return domString;
  })
};

//this assesses the input and runs the studentBuilder function. If the studentName is empty, it sends a blankFieldAlert, if it contains a name, it prints to DOM and then clears the input field
const addStudent = (event) => {
  event.preventDefault();
  let studentName = document.getElementById("studentNameInput").value;
  studentBuilder();
  if (studentName === ``) {
    blankFieldAlert();
  } else {
    printToDom('housedStudents', domString);
    document.getElementById('studentNameInput').value = "";
  }
};

//this function will only show students in the house whose button is clicked
const houseFilter = (clickedButton) => {
  const buttonId = clickedButton.target.id;
  const selectedStudents = [];
  housedStudents.forEach((student) => {
    if (student.house === buttonId) {
      selectedStudents.push(student);
    }
  });
  if (buttonId === 'all') {
    printToDom('housedStudents', housedStudents);
  } else {
    newStudentBuilder(selectedStudents);
  }
};

//const expel = () => {
  //var studentsDiv = document.getElementById('')
  //figure out ID or index of the studentObject that has been clicked
  //use the index to add the studentObject to the expelledStudents array
  //use the index to remove the studentObject from the housedStudents array (OR just hide it)
  //reprint the domString of housedStudents to show the updated list
  //print the expelledStudents array
//};

// Just using the example below to try to make my own function
// var g = document.getElementById('my_div');
// for (var i = 0, len = g.children.length; i < len; i++)
// {

//     (function(index){
//         g.children[i].onclick = function(){
//               alert(index)  ;
//         }    
//     })(i);

// }

const eventListeners = () => {
  document.getElementById('get-started').addEventListener('click', showStudentEntryForm);
  document.getElementById('sortBtn').addEventListener('click', addStudent);
  //document.getElementById('expelBtn').addEventListener('click', expel);
  // document.getElementById('gryffindor').addEventListener('click', houseFilter);
  // document.getElementById('hufflepuff').addEventListener('click', houseFilter);
  // document.getElementById('slytherin').addEventListener('click', houseFilter);
  // document.getElementById('ravenclaw').addEventListener('click', houseFilter);
  // document.getElementById('all').addEventListener('click', houseFilter);
};

const init = () => {
  eventListeners();
  hideStudentEntryForm();
};

init();
