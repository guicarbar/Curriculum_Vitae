// dar zoom e tirar zoom

function zoomInProject(element) {
    element.classList.add("zoom");
}

function zoomOutProject(element) {
    element.classList.remove("zoom");
}

function colorchange(element) {
    element.classList.add("btn-projetos-branco")
}

function colorchangeremove(element) {
    element.classList.remove("btn-projetos-branco")
}

function trocarprojetos() {
    window.location.href = "../pages/Projects.html";
}

function trocarcontato() {
    window.location.href = "../pages/contact.html";
}

function trocarindex() {
    window.location.href = "../pages/index.html";
}