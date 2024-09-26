const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const text = document.querySelector("h2");
const image = document.querySelector("#myImage");

btnOne.addEventListener("click", mrBig);
btnTwo.addEventListener("click", mrAidan);

function mrBig() {
    image.setAttribute("src", "john_kerry.png");
    text.innerHTML = "Они поженятся?"
    btnOne.innerHTML = "Да, но не сразу!";
    btnTwo.textContent = "Никогда";

    btnOne.addEventListener("click", wedding);
    btnTwo.addEventListener("click", neverMerried);
}

function wedding() {
    image.setAttribute("src", "kerry_john.png");
    text.innerHTML = "Они поженятся и будут счасливы. Но у них не будет детей."
    btnOne.style.display = "none";
    btnTwo.style.display = "none";
}

function neverMerried() {
    image.setAttribute("src", "marrig_John.png");
    text.innerHTML = "Он бросит её у алтаря."
    btnOne.style.display = "none";
    btnTwo.style.display = "none";
}

function mrAidan() {
    image.setAttribute("src", "kerry_aidon.png");
    text.innerHTML = "Они поженятся?"
    btnOne.innerHTML = "Да";
    btnTwo.textContent = "Нет";

    btnOne.addEventListener("click", weddingAidan);
    btnTwo.addEventListener("click", goAway);
}

function weddingAidan() {
    image.setAttribute("src", "aidon_kerry.png");
    text.innerHTML = "Они поженятся и будут счасливы. У них не будет ребенок."
    btnOne.style.display = "none";
    btnTwo.style.display = "none";
}

function goAway() {
    image.setAttribute("src", "go_away.png");
    text.innerHTML = "Она ему изменит."
    btnOne.style.display = "none";
    btnTwo.style.display = "none";
}