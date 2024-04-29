// dar zoom e tirar zoom

function zoomInProject(element) {
    element.classList.add("zoom");
}

function zoomOutProject(element) {
    element.classList.remove("zoom");
}

// trocar a cor da letra do botao

function colorchange(element) {
    element.classList.add("btn-projetos-branco")
}

function colorchangeremove(element) {
    element.classList.remove("btn-projetos-branco")
}

// trocar de page do site

function trocarprojetos() {
    window.location.href = "../pages/Projects.html";
}

function trocarcontato() {
    window.location.href = "../pages/contact.html";
}

function trocarindex() {
    window.location.href = "../pages/index.html";
}

