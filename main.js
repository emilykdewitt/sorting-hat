const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
const housedStudents = [];
const expelledStudents = [];

const getStarted = document.getElementById('get-started');
const sortButton = document.getElementById('sortBtn');
const studentInput = document.getElementById('studentInput');

let studentCounter = 1;

//This allows us to print to a selected div in our html
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

//This function will keep the student entry form hidden until the 'Get Started' Button is clicked
const hideStudentEntryForm = () => {
  document.getElementById('studentEntry').style.display = 'none';
};

//This function causes the student entry form to appear when the 'Get Started' button is clicked
const showStudentEntryForm = () => {
  document.getElementById('studentEntry').style.display = 'block';
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

const addStudent = (e) => {
  e.preventDefault();
  const inputText = studentInput.value;
  if (inputText === ``) {
    blankFieldAlert();
  } else {
    const newStudent = {
      name: inputText,
      house: hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)],
      id: `student${studentCounter}`,
    };
    if (newStudent.house === 'Gryffindor') {
      newStudent.crest = 'house-crests/gryffindor.png';
    } else if (newStudent.house === 'Hufflepuff') {
      newStudent.crest = 'house-crests/hufflepuff.png';
    } else if (newStudent.house === 'Slytherin') {
      newStudent.crest = 'house-crests/slytherin.png';
    } else {
      newStudent.crest = 'house-crests/ravenclaw.png';
    };
    housedStudents.push(newStudent);
    studentCounter++;
    printToDom('housedStudents', inputText);
    domStringBuilder(housedStudents, 'housedStudents');
    addDeleteEvents();
    studentInput.value = ``;
  };
};

const expelFunction = (e) => {
  const buttonId = e.target.id;
  housedStudents.forEach((student, index) => {
    if(student.id === buttonId) {
      student.crest = 'house-crests/darkmark.png';
      expelledStudents.push(student);
      housedStudents.splice(index, 1);
      student.house = `VoldArmy`;
    };
  });
  domStringBuilder(housedStudents, 'housedStudents');
  domStringBuilder(expelledStudents, 'expelledStudents');
  addDeleteEvents();
};


const addDeleteEvents = () => {
  const expelButtons = document.getElementsByClassName('expelBtn');
  for (let i = 0; i < expelButtons.length; i++) {
    expelButtons[i].addEventListener('click', expelFunction);
  }
};

//This builds the domString of all the cards I want to print with student names and then clears the input field
const domStringBuilder = (selectedArray, divId) => {
  let domString = ``;
  selectedArray.forEach((student) => {
    domString += `<div class="card text-center col-3 m-1">`;
    domString +=   `<div class="card-body ${student.house}">`
    domString +=     `<img class="crest-image" src="${student.crest}">`;
    domString +=     `<h5 class="card-title">${student.name}</h5>`
    domString +=     `<a id="${student.id}" class="btn btn-primary expelBtn">Expel</a>`
    domString +=   `</div>`;
    domString += `</div>`;
  });

  printToDom(divId, domString); //can I replace 'housedStudents' with divId?
};

//this function will only show students in the house whose button is clicked
const houseFilter = (e) => {
  let selectedStudents = [];
  const buttonId = e.target.id;
  housedStudents.forEach((student) => {
    if (student.house === buttonId) {
      selectedStudents.push(student);
    }
  });
  if (buttonId === 'All') {
    domStringBuilder(housedStudents, 'housedStudents');
  } else if (buttonId === 'VoldArmy') {
    domStringBuilder(expelledStudents, 'expelledStudents')
  } else {
    domStringBuilder(selectedStudents, 'housedStudents');
  }
};

const eventListeners = () => {
  getStarted.addEventListener('click', showStudentEntryForm);
  sortButton.addEventListener('click', addStudent);
  document.getElementById('Gryffindor').addEventListener('click', houseFilter);
  document.getElementById('Hufflepuff').addEventListener('click', houseFilter);
  document.getElementById('Slytherin').addEventListener('click', houseFilter);
  document.getElementById('Ravenclaw').addEventListener('click', houseFilter);
  document.getElementById('All').addEventListener('click', houseFilter);
};

const init = () => {
  eventListeners();
  hideStudentEntryForm();
};

init();
