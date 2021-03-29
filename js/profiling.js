let genderButton = document.getElementById("sort-sex");
let getAllGender = document.getElementsByClassName("student-sex");

genderButton.onclick = function(){
    let varLength = getAllGender.length;
    if(genderButton.checked){
        for(let i = 0; i<varLength; i++){
            getAllGender[i].style.display = "table-cell";
        }
    }
    else{
        for(let i = 0; i<varLength; i++){
            getAllGender[i].style.display = "none";
        }
    }
}

let religionButton = document.getElementById("sort-religion");
let getAllReligion = document.getElementsByClassName("student-religion");

religionButton.onclick = function(){
    let varLength = getAllReligion.length;
    if(religionButton.checked){
        for(let i = 0; i<varLength; i++){
            getAllReligion[i].style.display = "table-cell";
        }
    }
    else{
        for(let i = 0; i<varLength; i++){
            getAllReligion[i].style.display = "none";
        }
    }
}

let sessionButton = document.getElementById("sort-sessions");
let getAllSession = document.getElementsByClassName("student-sessions");

sessionButton.onclick = function(){
    let varLength = getAllSession.length;
    if(sessionButton.checked){
        for(let i = 0; i<varLength; i++){
            getAllSession[i].style.display = "table-cell";
        }
    }
    else{
        for(let i = 0; i<varLength; i++){
            getAllSession[i].style.display = "none";
        }
    }
}

