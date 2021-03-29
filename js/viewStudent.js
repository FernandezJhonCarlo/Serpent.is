let modalParent = document.getElementById("parentModal");
let viewParentModal = document.getElementById("viewParentModal");

viewParentModal.onclick = function(){
    modalParent.style.display = "flex";
}

let modalSibling = document.getElementById("siblingModal");
let viewSiblingModal = document.getElementById("viewSiblingModal");

viewSiblingModal.onclick = function(){
    modalSibling.style.display = "flex";
}

let modalSession = document.getElementById("sessionModal");
let viewSessionModal = document.getElementById("viewSessionModal");

viewSessionModal.onclick = function(){
    modalSession.style.display = "flex";
}

let modalUpdate = document.getElementById("updateModal");
let viewUpdateModal = document.getElementById("viewUpdateModal");

viewUpdateModal.onclick = function(){
    modalUpdate.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == modalParent || event.target == closeParentModal) {
        modalParent.style.display = "none";
    }
    else if (event.target == modalSibling || event.target == closeSiblingModal) {
        modalSibling.style.display = "none";
    }
    else if (event.target == modalSession || event.target == closeSessionModal) {
        modalSession.style.display = "none";
    }
    else if (event.target == modalUpdate || event.target == closeUpdateModal) {
        modalUpdate.style.display = "none";
    }
}
