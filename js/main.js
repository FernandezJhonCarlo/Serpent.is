let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarMenu = document.querySelector(".nav-sidebar ul span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar ul a");
    if(toggleNavStatus===false){
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarMenu.style.opacity = "1";
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }
    else{
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "60px";
        getSidebarMenu.style.opacity = "0";
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }
        toggleNavStatus = false;
    } 
}

//function newStudent fires on page load.
let newStudent = () => {
    let toggleTemporaryAddress = false;
    let toggleSpouseInfo = false;
    //Function for adding and removing new siblings, creates new forms per click, 
    let siblingCount = -1;
    let familyWindowHeight = 2000; //Variable to save Family Window Height 
    $("#addSibling").click(function () {
        let getWindow = document.querySelector(".window-content");
        let windowHeight = parseInt(getWindow.style.height);
        let newWindowHeight = parseInt(windowHeight) + 350;
        getWindow.style.height = newWindowHeight + "px";
        familyWindowHeight = newWindowHeight;
        let navButtons = document.getElementById("nav-buttons");
        $('<span id="siblingSpan' + (siblingCount + 1) + '" style="height:10px;"></span><span id="siblingSpan' + (siblingCount + 1) + '"><label>Firstname</label><input type="text" id="siblingFirstname' + (siblingCount + 1) + '" name="siblingFirstname' + (siblingCount + 1) + '"></span><span id="siblingSpan' + (siblingCount + 1) + '"><label>Middlename</label><input type="text" id="siblingMiddlename' + (siblingCount + 1) + '" name="siblingMiddlename' + (siblingCount + 1) + '"></span><span id="siblingSpan' + (siblingCount + 1) + '"><label>Lastname</label><input type="text" id="siblingLastname' + (siblingCount + 1) + '" name="siblingLastname' + (siblingCount + 1) + '"></span><span id="siblingSpan' + (siblingCount + 1) + '"><label>Sibling relation</label><select name="siblingRelation' + (siblingCount + 1) + '" id="siblingRelation' + (siblingCount + 1) + '"><option value="brother">brother</option><option value="sister">sister</option></select></span><span id="siblingSpan' + (siblingCount + 1) + '" style="height:5px;"></span>').insertBefore(navButtons);
        siblingCount++;
    });

    $("#removeSibling").click(function () {
        if (siblingCount >= -1) {
            let lastSibling = document.querySelectorAll("#siblingSpan" + siblingCount);
            for (let i = 0; i < lastSibling.length; i++) {
                $(lastSibling[i]).remove();
            }
            let getWindow = document.querySelector(".window-content");
            let windowHeight = parseInt(getWindow.style.height);
            let newWindowHeight = parseInt(windowHeight) - 350;
            getWindow.style.height = newWindowHeight + "px";
            familyWindowHeight = newWindowHeight;
            siblingCount--;
        }
    });

    // Function to show temporary address field when residency type != resident
    document.getElementById("isBoarder").onchange = boarderHandleChange;
    function boarderHandleChange(Select) {
        let value = Select.target.value;
        let getWindow = document.querySelector(".window-content");
        let getTempData = document.querySelectorAll("#boarderAddress");
        if (toggleTemporaryAddress === false && value !== "resident") {
            getWindow.style.height = "1000px";
            let arrayLength = getTempData.length;
            for (let i = 0; i < arrayLength; i++) {
                getTempData[i].style.display = "flex";
                getTempData[i].style.visibility = "visible";
            }
            toggleTemporaryAddress = true;
        }
        else if (toggleTemporaryAddress === true && value === "resident") {
            getWindow.style.height = "650px";
            let arrayLength = getTempData.length;
            for (let i = 0; i < arrayLength; i++) {
                getTempData[i].style.display = "none";
                getTempData[i].style.visibility = "hidden";
            }
            toggleTemporaryAddress = false;
        }
    }

    // Function for changing the pages in the Add Form
    $(".form-nav-button").click(function(){
        let ID = this.id;
        let getForm = document.querySelectorAll(".form-nav-button");
        let getFormBiographics = document.querySelector("#biographics");
        let getFormAddress = document.querySelector("#address");
        let getFormEducation = document.querySelector("#education");
        let getFormPersonal = document.querySelector("#personal-data");
        let getFormFamily = document.querySelector("#family");
        let getWindow = document.querySelector(".window-content");
        let hideForm = function () {
            let getForm = document.querySelectorAll(".add-form");
            let arrayLength = getForm.length;
            for (let i = 0; i < arrayLength; i++) {
                getForm[i].style.visibility = "hidden";
                getForm[i].style.display = "none";
            }
        };
        switch (ID) {
            case "prev-2":
                hideForm();
                getFormBiographics.style.height = "100%";
                getFormBiographics.style.width = "80%";
                getFormBiographics.style.visibility = "visible";
                getFormBiographics.style.display = "flex";
                getWindow.style.height = "600px";
                break;
            case "next-1":
            case "prev-3":
                hideForm();
                getFormAddress.style.height = "100%";
                getFormAddress.style.width = "80%";
                getFormAddress.style.visibility = "visible";
                getFormAddress.style.display = "flex";
                if (toggleTemporaryAddress === true) {
                    getWindow.style.height = "1000px";
                }
                else{
                    getWindow.style.height = "650px";
                }
                break;
            case "next-2":
            case "prev-4":
                hideForm();
                getFormEducation.style.height = "100%";
                getFormEducation.style.width = "80%";
                getFormEducation.style.visibility = "visible";
                getFormEducation.style.display = "flex";
                getWindow.style.height = "600px";
                break;
            case "next-3":
            case "prev-5":
                hideForm();
                getFormPersonal.style.height = "100%";
                getFormPersonal.style.width = "80%";
                getFormPersonal.style.visibility = "visible";
                getFormPersonal.style.display = "flex";
                getWindow.style.height = "670px";
                break;
            case "next-4":
                hideForm();
                getFormFamily.style.height = "100%";
                getFormFamily.style.width = "80%";
                getFormFamily.style.visibility = "visible";
                getFormFamily.style.display = "flex";
                getWindow.style.height = familyWindowHeight + "px";
                break;
            default:
                alert('Hello!');
        }
    });

    // Function to add spouse inputs in case of non-single status
    document.getElementById("civilStatus").onchange = marriedHandleChange;
    function marriedHandleChange(isMarried){
        let status = isMarried.target.value;    
        let getWindow = document.querySelector(".window-content");
        let windowHeight = parseInt(getWindow.style.height);
        let getSpouseData = document.querySelectorAll("#spouseInfo");    
        let arrayLength = getSpouseData.length;
        if(toggleSpouseInfo===false && status ==="married"){
            getWindow.style.height = windowHeight + 550 + "px";
            for(let i=0; i< arrayLength; i++){
                getSpouseData[i].style.display = "flex";
                getSpouseData[i].style.visibility = "visible";
            }
            toggleSpouseInfo = true;
            familyWindowHeight = parseInt(getWindow.style.height);
        }
        else if(toggleSpouseInfo===true && status !=="married"){
            getWindow.style.height = windowHeight - 550 + "px";
            for(let i=0; i< arrayLength; i++){
                getSpouseData[i].style.display = "none";
                getSpouseData[i].style.visibility = "hidden";
            }
            toggleSpouseInfo = false;
            familyWindowHeight = parseInt(getWindow.style.height);
        }
    }
}


let initializeCalendar = () => {
    const WEEKDAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    const INITIAL_YEAR = dayjs().format("YYYY");
    const INITIAL_MONTH = dayjs().format("M");

    //Select the calendar Grid Header Element
    const daysOfWeekElement = document.getElementById("days-of-week");
    
    // Loop through the array of weekdays
    WEEKDAYS.forEach(weekday =>{
        const weekDayElement = document.createElement("li");
        daysOfWeekElement.appendChild(weekDayElement);
        weekDayElement.innerText = weekday;
    });
    //alert(dayjs().week());
    
    //const weekday = require("dayjs/plugin/weekday");
    //console.log(dayjs());
}
