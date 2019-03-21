// Create printToDom function that inserts the form into a div in html - DONE
// Create domStringBuilder function - DONE
// Create function eventListeners to host button click listeners
// Create bootstrap form that will accept names entered by user - DONE
// Create sort button that will eventually sort students into houses
// Write a click event function that causes form to appear when get started button is clicked

const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
const housedStudents = [];
const expelledStudents = [];

//This allows us to print to a selected div in our html
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//This builds the domString of all the cards I want to print with student names
const newStudentBuilder = () => {
    //const studentName = document.getElementById("studentNameInput").value;
    const assignedHouse = hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)];
    const studentObject = {name: '', house: 0};
    //studentObject.name = studentName;
    studentObject.house = assignedHouse;
    housedStudents.push(studentObject);
    housedStudents[housedStudents.length + 1]
};

//print function

console.log(housedStudents);

const EventListeners = () => {
    //listen for buttonclick 'Get Started' that should load the form where user enters student name
};

/*The form that should appear when 'Get Started' is clicked
<form>
  <div class="form-group">
    <label for="inputName">Student Name</label>
    <input type="name" class="form-control" id="studentNameInput" placeholder="Parvati Patel">
  </div>
  <button type="submit" class="btn btn-primary">Sort</button>
</form>
*/

newStudentBuilder();
domStringBuilder();
