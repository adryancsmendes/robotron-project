const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braço = document.querySelector("#braço");

somar.addEventListener("click", (evento) => {
    braço.value = parseInt(braço.value) + 1;
});

subtrair.addEventListener("click", (evento) => {
    braço.value = parseInt(braço.value) - 1;
});