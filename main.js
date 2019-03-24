const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
const housedStudents = [];
const expelledStudents = [];

//This function will keep the student entry form hidden until the 'Get Started' Button is clicked
const hideStudentEntry = () => {
  document.getElementById('studentEntry').style.display = 'none';
};

//This function causes the student entry form to appear when the 'Get Started' button is clicked
const showForm = () => {
  document.getElementById('studentEntry').style.display = 'block';
};

//This allows us to print to a selected div in our html
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//I declared the domString outside of the newStudentBuilder because I didn't want a new card-columns div to be created every time
var domString = `<div class="card-columns">`;

//This builds the domString of all the cards I want to print with student names and then clears the input field
const newStudentBuilder = (e) => {
    e.preventDefault();
    let studentName = document.getElementById("studentNameInput").value;
    const assignedHouse = hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)];
    const studentObject = {name: ``, house: ``};
      studentObject.name = studentName;
      studentObject.house = assignedHouse;
      studentObject.idNumber = Math.floor(100000 + Math.random() * 900000);
    housedStudents.push(studentObject);
    //think about using onClick="findClickId(this.id)" below to be able to search for id of clicked item
    domString += `
        <div class="card text-center" id="${studentObject.idNumber}">
          <div class="card-body">
            <h5 class="card-title">${studentObject.name}</h5>
            <p class="card-text">${studentObject.house}</p>
            <a id="expelBtn" class="btn btn-primary">Expel</a>
          </div>
        </div>`;
    printToDom('housedStudents', domString);
    document.getElementById('studentNameInput').value = "";
};

// //the function below finds the id of the object that has been clicked, 
// const expel = () => {
//   const clickedStudentId = event.target.id;
//   const targetIndex = getElementById(clickedStudentId).indexOf;
//   expelledStudents.push(housedStudents[targetIndex]);
//   housedStudents.splice(targetIndex);
// };



arrayOfObjects.length = end;
const eventListeners = () => {
  document.getElementById('get-started').addEventListener('click', showForm);
  document.getElementById('sortBtn').addEventListener('click', newStudentBuilder);
  //document.getElementById('expelBtn').addEventListener('click', expel);
};

const init = () => {
  eventListeners();
  hideStudentEntry();
};

init();
