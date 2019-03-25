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

const cardBuilder = () => {
  let studentName = document.getElementById("studentNameInput").value;
  const assignedHouse = hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)]; //assigns random Hogwarts house
  const studentObject = {name: ``, house: ``}; //creates a blank student object for values to feed into
    studentObject.name = studentName;
    studentObject.house = assignedHouse;
    studentObject.idNumber = Math.floor(100000 + Math.random() * 900000); //assigns random ID number
    housedStudents.push(studentObject);
    domString += `<div class="card text-center" id="${assignedHouse}">`;
  //think about using onClick="findClickId(this.id)" below to be able to search for id of clicked item
      if (assignedHouse === 'Gryffindor') {
        domString += `<div class="card-body gryffindor"><img class="crestimage" src="housecrests/gryffindor.png" alt="Gryffindor">`;
      } else if (assignedHouse === 'Hufflepuff') {
        domString += `<div class="card-body hufflepuff"><img class="crestimage" src="housecrests/hufflepuff.png" alt="Hufflepuff">`;
      } else if (assignedHouse === 'Slytherin') {
        domString += `<div class="card-body slytherin"><img class="crestimage" src="housecrests/slytherin.png" alt="Slytherin">`;
      } else {
        domString += `<div class="card-body ravenclaw"><img class="crestimage" src="housecrests/ravenclaw.png" alt="Ravenclaw">`;
      };
      domString +=    `<h5 class="card-title">${studentObject.name}</h5>
                      <a id="expelBtn" class="btn btn-primary">Expel</a>
                    </div>
                  </div>`;
}

//this assesses the input and if it's empty, it returns a warning message, if it contains a name, it runs the card builder function, prints to DOM and then clears the input field
const addStudent = (event) => {
  event.preventDefault();
  if (studentName === ``) {
    blankFieldAlert();
  } else {
    cardBuilder();
  }
  printToDom('housedStudents', domString);
  document.getElementById('studentNameInput').value = "";
};

//this funciton 
const houseFilter = (clickedButton) => {
  const buttonId = clickedButton.target.id;
  const selectedStudents = [];
  housedStudents.forEach((student) => {
    if (student.assignedHouse === buttonId) {
      selectedStudents.push(student);
    }
  });
  if (buttonId === 'all') {
    newStudentBuilder(housedStudents);
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
  document.getElementById('gryffindor').addEventListener('click', houseFilter);
  document.getElementById('hufflepuff').addEventListener('click', houseFilter);
  document.getElementById('slytherin').addEventListener('click', houseFilter);
  document.getElementById('ravenclaw').addEventListener('click', houseFilter);
  document.getElementById('all').addEventListener('click', houseFilter);
};

const init = () => {
  eventListeners();
  hideStudentEntryForm();
};

init();
