const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
const housedStudents = [];
const expelledStudents = [];

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
  const newStudent = {
    name: inputText,
    house: hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)],
    id: `student${studentCounter}`,
  };
  if (newStudent.house === 'Gryffindor') {
    newStudent.crest = 'house-crests/gryffindor.png';
  } else if (studentObject.house === 'Hufflepuff') {
    newStudent.crest = 'house-crests/hufflepuff.png';
  } else if (studentObject.house === 'Slytherin') {
    newStudent.crest = 'house-crests/slytherin.png';
  } else {
    newStudent.crest = 'house-crests/ravenclaw.png';
  };
  housedStudents.push(newStudent);
  studentCounter++;
  printToDom('housedStudents', inputText);
  domStringBuilder(housedStudents);
  addDeleteEvents();
  studentInput.value = ``;
}

const expelFunction = (e) => {
  const buttonId = e.target.id;
  housedStudents.forEach((student, index) => {
    if(ingredient.id === buttonId) {
      housedStudents.splice(index, 1);
    }
  })
  domStringBuilder(housedStudents);
  addDeleteEvents();
};

const addDeleteEvents = () => {
  const expelButtons = document.getElementsByClassName('expelBtn');
  for (let i = 0; i < expelButtons.length; i++) {
    expelButtons[i].addEventListener('click', expelFunction);
  }
};

//This builds the domString of all the cards I want to print with student names and then clears the input field
const domStringBuilder = (selectedArray) => {
  let domString = ``;
  selectedArray.forEach((student) => {
    domString += `<div class="card text-center col-4">`;
    domString +=  `<div class="card-body ${student.house}">`
    domString +=    `<img class="crest-image" src="${student.crest}">`;
    domString +=    `<h5 class="card-title">${student.name}</h5>`
    domString +=    `<a id="expelBtn" class="btn btn-primary">Expel</a>`
    domString +=  `</div>`;
    domString += `</div>`;
  })

  let studentObject = {name: ``, house: ``, crest: ``};
  studentObject.name = document.getElementById("studentNameInput").value; //gets the name the user has input
  studentObject.house = hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)]; //assigns random Hogwarts house
  if (studentObject.house === 'Gryffindor') {
    studentObject.crest = 'house-crests/gryffindor.png';
  } else if (studentObject.house === 'Hufflepuff') {
    studentObject.crest = 'house-crests/hufflepuff.png';
  } else if (studentObject.house === 'Slytherin') {
    studentObject.crest = 'house-crests/slytherin.png';
  } else {
    studentObject.crest = 'house-crests/ravenclaw.png';
  };
  selectedArray.push(studentObject); //adds object to array you want to push to
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
