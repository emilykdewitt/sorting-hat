// Create printToDom function that inserts the form into a div in html - DONE
// Create domStringBuilder function - DONE
// Create function eventListeners to host button click listeners
// Create bootstrap form that will accept names entered by user - DONE
// Create sort button that will eventually sort students into houses
// Write a click event function that causes form to appear when get started button is clicked

const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
const housedStudents = [];
const expelledStudents = [];

//This function will keep the student entry form hidden until the 'Get Started' Button is clicked
const hideStudentEntry = () => {
  document.getElementById('studentEntry').style.display = 'none';
};

const showForm = () => {
  document.getElementById('studentEntry').style.display = 'block';
};

//This allows us to print to a selected div in our html
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//This builds the domString of all the cards I want to print with student names
const newStudentBuilder = () => {
    let studentName = document.getElementById("studentNameInput").value;
    const assignedHouse = hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)];
    const studentObject = {name: ``, house: ``};
    studentObject.name = studentName;
    studentObject.house = assignedHouse;
    housedStudents.push(studentObject);
    console.log(housedStudents);
};

const eventListeners = () => {
  document.getElementById('get-started').addEventListener('click', showForm);
  document.getElementById('sortBtn').addEventListener('click', newStudentBuilder);
};

const init = () => {
  eventListeners();
  hideStudentEntry();
};

init();
