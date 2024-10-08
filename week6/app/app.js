let classroom = {
  students: ["Erin", "Tara", "Jeremy", "Louie"],
  className: "N220",
  showStudents: function () {
    document.getElementById("students").innerHTML = "";
    let div = document.createElement("div");
    let p = document.createElement("p");
    div.append(this.className + " students:", p);
    document.getElementById("students").append(div);
    this.students.forEach((student) => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      div.append(`- ${student}`, p);
      document.getElementById("students").append(div);
    });
  },
  maxStudents: 5,
};

console.log(classroom);

function addStudent() {
  let studentCount = classroom.students.length;
  if (studentCount >= classroom.maxStudents) {
    console.log("Class is full!");
    document.getElementById("students").innerHTML = "class is full!";
  } else {
    let studentName = document.getElementById("studentName").value;
    classroom.students.push(studentName);
    document.getElementById("studentName").value = "";
    classroom.showStudents();
  }
}

classroom.showStudents();
