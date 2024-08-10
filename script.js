const word = document.getElementById("word");
const btn = document.getElementById("btn");
const result = document.getElementById("results");
const reset = document.getElementById("reset")

btn.addEventListener("click", () => {
    if (word.value !== "") {
        reset.style.display = "block";
        result.style.display = "block";
        word.value.split("").reverse().join("") === word.value ? result.innerHTML = `<h2>"${word.value}" is a palindrome</h2>` : result.innerHTML = `<h2>"${word.value}" is not a palindrome</h2>`
    } else {
        reset.style.display = "block";
        result.style.display = "block";
        result.innerHTML  = `<h2>Please input a value</h2>`
    }
});

reset.addEventListener("click", () => {
    result.style.display = "none";
    reset.style.display = "none";
    word.value = "";
});