let modalStudent = document.getElementById("studentModal");
let addStudentModal = document.getElementById("addStudentModal");

addStudentModal.onclick = function() {
    modalStudent.style.display = "flex";
}

let modalTeacher = document.getElementById("teacherModal");
let addTeacherModal = document.getElementById("addTeacherModal");

addTeacherModal.onclick = function(){
    modalTeacher.style.display = "flex";
}

let modalParent = document.getElementById("parentModal");
let addParentModal = document.getElementById("addParentModal");

addParentModal.onclick = function(){
    modalParent.style.display = "flex";
}

let closeStudentModal = document.getElementById("closeStudentModal");
let closeTeacherModal = document.getElementById("closeTeacherModal");
let closeParentModal = document.getElementById("closeParentModal");

window.onclick = function(event) {
    if (event.target == modalStudent || event.target == closeStudentModal) {
        modalStudent.style.display = "none";
    }
    if (event.target == modalTeacher || event.target==closeTeacherModal){
        modalTeacher.style.display = "none";
    }
    if(event.target == modalParent || event.target==closeParentModal){
        modalParent.style.display = "none";
    }
}
